__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 436,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 39,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "name": "foo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 30,
          "end": 37,
          "name": "test",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 34,
            "end": 37,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 36,
              "end": 37,
              "typeName": {
                "type": "Identifier",
                "start": 36,
                "end": 37,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 13,
        "end": 29,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 14,
            "end": 28,
            "name": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 24,
              "end": 28,
              "typeName": {
                "type": "Identifier",
                "start": 24,
                "end": 28,
                "name": "Date",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 40,
      "end": 86,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 53,
        "name": "foo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 72,
          "end": 84,
          "name": "test",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 76,
            "end": 84,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 78,
              "end": 84
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 53,
        "end": 71,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 54,
            "end": 70,
            "name": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 64,
              "end": 70,
              "typeName": {
                "type": "Identifier",
                "start": 64,
                "end": 70,
                "name": "Number",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 87,
      "end": 133,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 100,
        "name": "foo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 119,
          "end": 128,
          "name": "test",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 123,
            "end": 128,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 125,
              "end": 128
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 130,
        "end": 133,
        "body": []
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 100,
        "end": 118,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 101,
            "end": 117,
            "name": {
              "type": "Identifier",
              "start": 101,
              "end": 102,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 111,
              "end": 117,
              "typeName": {
                "type": "Identifier",
                "start": 111,
                "end": 117,
                "name": "String",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": null
    },
    {
      "type": "ExpressionStatement",
      "start": 134,
      "end": 149,
      "expression": {
        "type": "CallExpression",
        "start": 134,
        "end": 148,
        "callee": {
          "type": "Identifier",
          "start": 134,
          "end": 138,
          "name": "foo1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 145,
            "end": 147,
            "value": "",
            "raw": "\"\""
          }
        ],
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 138,
          "end": 144,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 139,
              "end": 143,
              "typeName": {
                "type": "Identifier",
                "start": 139,
                "end": 143,
                "name": "Date",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 169,
      "end": 211,
      "id": {
        "type": "Identifier",
        "start": 178,
        "end": 182,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 199,
          "end": 206,
          "name": "test",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 203,
            "end": 206,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 205,
              "end": 206,
              "typeName": {
                "type": "Identifier",
                "start": 205,
                "end": 206,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 182,
        "end": 198,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 183,
            "end": 197,
            "name": {
              "type": "Identifier",
              "start": 183,
              "end": 184,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 193,
              "end": 197,
              "typeName": {
                "type": "Identifier",
                "start": 193,
                "end": 197,
                "name": "Date",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 207,
        "end": 210,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 209,
          "end": 210,
          "typeName": {
            "type": "Identifier",
            "start": 209,
            "end": 210,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 212,
      "end": 261,
      "id": {
        "type": "Identifier",
        "start": 221,
        "end": 225,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 244,
          "end": 256,
          "name": "test",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 248,
            "end": 256,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 250,
              "end": 256
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 225,
        "end": 243,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 226,
            "end": 242,
            "name": {
              "type": "Identifier",
              "start": 226,
              "end": 227,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 236,
              "end": 242,
              "typeName": {
                "type": "Identifier",
                "start": 236,
                "end": 242,
                "name": "Number",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 257,
        "end": 260,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 259,
          "end": 260,
          "typeName": {
            "type": "Identifier",
            "start": 259,
            "end": 260,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 263,
      "end": 327,
      "id": {
        "type": "Identifier",
        "start": 272,
        "end": 276,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 295,
          "end": 304,
          "name": "test",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 299,
            "end": 304,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 301,
              "end": 304
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 311,
        "end": 327,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 313,
            "end": 325,
            "argument": {
              "type": "Literal",
              "start": 320,
              "end": 324,
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 276,
        "end": 294,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 277,
            "end": 293,
            "name": {
              "type": "Identifier",
              "start": 277,
              "end": 278,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 287,
              "end": 293,
              "typeName": {
                "type": "Identifier",
                "start": 287,
                "end": 293,
                "name": "String",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 305,
        "end": 310,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 307,
          "end": 310
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 328,
      "end": 343,
      "expression": {
        "type": "CallExpression",
        "start": 328,
        "end": 342,
        "callee": {
          "type": "Identifier",
          "start": 328,
          "end": 332,
          "name": "foo2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 339,
            "end": 341,
            "value": "",
            "raw": "\"\""
          }
        ],
        "optional": false,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 332,
          "end": 338,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 333,
              "end": 337,
              "typeName": {
                "type": "Identifier",
                "start": 333,
                "end": 337,
                "name": "Date",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
