__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 435,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 39,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 13,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 24,
              "end": 28,
              "typeName": {
                "type": "Identifier",
                "start": 24,
                "end": 28,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
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
      "params": [
        {
          "type": "Identifier",
          "start": 30,
          "end": 37,
          "decorators": [],
          "name": "test",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 40,
      "end": 86,
      "id": {
        "type": "Identifier",
        "start": 49,
        "end": 53,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 64,
              "end": 70,
              "typeName": {
                "type": "Identifier",
                "start": 64,
                "end": 70,
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null
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
      "params": [
        {
          "type": "Identifier",
          "start": 72,
          "end": 84,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 76,
            "end": 84,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 78,
              "end": 84
            }
          }
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 87,
      "end": 133,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 100,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 111,
              "end": 117,
              "typeName": {
                "type": "Identifier",
                "start": 111,
                "end": 117,
                "decorators": [],
                "name": "String",
                "optional": false,
                "typeAnnotation": null
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
      "params": [
        {
          "type": "Identifier",
          "start": 119,
          "end": 128,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 123,
            "end": 128,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 125,
              "end": 128
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 130,
        "end": 133,
        "body": []
      },
      "expression": false
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
          "decorators": [],
          "name": "foo1",
          "optional": false,
          "typeAnnotation": null
        },
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
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
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
        "optional": false
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
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 193,
              "end": 197,
              "typeName": {
                "type": "Identifier",
                "start": 193,
                "end": 197,
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
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
      "params": [
        {
          "type": "Identifier",
          "start": 199,
          "end": 206,
          "decorators": [],
          "name": "test",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
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
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 212,
      "end": 261,
      "id": {
        "type": "Identifier",
        "start": 221,
        "end": 225,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 236,
              "end": 242,
              "typeName": {
                "type": "Identifier",
                "start": 236,
                "end": 242,
                "decorators": [],
                "name": "Number",
                "optional": false,
                "typeAnnotation": null
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
      "params": [
        {
          "type": "Identifier",
          "start": 244,
          "end": 256,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 248,
            "end": 256,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 250,
              "end": 256
            }
          }
        }
      ],
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
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 263,
      "end": 327,
      "id": {
        "type": "Identifier",
        "start": 272,
        "end": 276,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 287,
              "end": 293,
              "typeName": {
                "type": "Identifier",
                "start": 287,
                "end": 293,
                "decorators": [],
                "name": "String",
                "optional": false,
                "typeAnnotation": null
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
      "params": [
        {
          "type": "Identifier",
          "start": 295,
          "end": 304,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 299,
            "end": 304,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 301,
              "end": 304
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 305,
        "end": 310,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 307,
          "end": 310
        }
      },
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
      "expression": false
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
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null
        },
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
                "decorators": [],
                "name": "Date",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
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
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
