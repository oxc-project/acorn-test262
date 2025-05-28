__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 336,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 31,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 31,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 19,
            "end": 29,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 19,
              "end": 25,
              "decorators": [],
              "name": "animal",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 29,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 27,
                "end": 29,
                "members": []
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "EmptyStatement",
      "start": 31,
      "end": 32
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 33,
      "end": 73,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 46,
        "decorators": [],
        "name": "Dog",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 55,
          "end": 61,
          "expression": {
            "type": "Identifier",
            "start": 55,
            "end": 61,
            "decorators": [],
            "name": "Animal",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 62,
        "end": 73,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 64,
            "end": 71,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 64,
              "end": 67,
              "decorators": [],
              "name": "dog",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 67,
              "end": 71,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 69,
                "end": 71,
                "members": []
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 74,
      "end": 114,
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 87,
        "decorators": [],
        "name": "Cat",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 96,
          "end": 102,
          "expression": {
            "type": "Identifier",
            "start": 96,
            "end": 102,
            "decorators": [],
            "name": "Animal",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 103,
        "end": 114,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 105,
            "end": 112,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 105,
              "end": 108,
              "decorators": [],
              "name": "cat",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 108,
              "end": 112,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 110,
                "end": 112,
                "members": []
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 115,
      "end": 159,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 130,
        "decorators": [],
        "name": "Moose",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 139,
          "end": 145,
          "expression": {
            "type": "Identifier",
            "start": 139,
            "end": 145,
            "decorators": [],
            "name": "Animal",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 146,
        "end": 159,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 148,
            "end": 157,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 148,
              "end": 153,
              "decorators": [],
              "name": "moose",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 153,
              "end": 157,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 155,
                "end": 157,
                "members": []
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 161,
      "end": 193,
      "id": {
        "type": "Identifier",
        "start": 170,
        "end": 177,
        "decorators": [],
        "name": "doThing",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 178,
          "end": 186,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 179,
            "end": 186,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 181,
              "end": 186,
              "literal": {
                "type": "Literal",
                "start": 181,
                "end": 186,
                "value": "dog",
                "raw": "\"dog\""
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 187,
        "end": 192,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 189,
          "end": 192,
          "typeName": {
            "type": "Identifier",
            "start": 189,
            "end": 192,
            "decorators": [],
            "name": "Dog",
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
      "start": 194,
      "end": 226,
      "id": {
        "type": "Identifier",
        "start": 203,
        "end": 210,
        "decorators": [],
        "name": "doThing",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 211,
          "end": 219,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 212,
            "end": 219,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 214,
              "end": 219,
              "literal": {
                "type": "Literal",
                "start": 214,
                "end": 219,
                "value": "cat",
                "raw": "\"cat\""
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 220,
        "end": 225,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 222,
          "end": 225,
          "typeName": {
            "type": "Identifier",
            "start": 222,
            "end": 225,
            "decorators": [],
            "name": "Cat",
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
      "start": 227,
      "end": 263,
      "id": {
        "type": "Identifier",
        "start": 236,
        "end": 243,
        "decorators": [],
        "name": "doThing",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 244,
          "end": 253,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 245,
            "end": 253,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 247,
              "end": 253
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 254,
        "end": 262,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 256,
          "end": 262,
          "typeName": {
            "type": "Identifier",
            "start": 256,
            "end": 262,
            "decorators": [],
            "name": "Animal",
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
      "start": 264,
      "end": 336,
      "id": {
        "type": "Identifier",
        "start": 273,
        "end": 280,
        "decorators": [],
        "name": "doThing",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 281,
          "end": 290,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 282,
            "end": 290,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 284,
              "end": 290
            }
          }
        },
        {
          "type": "Identifier",
          "start": 292,
          "end": 302,
          "decorators": [],
          "name": "y",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 294,
            "end": 302,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 296,
              "end": 302
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 303,
        "end": 310,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 305,
          "end": 310,
          "typeName": {
            "type": "Identifier",
            "start": 305,
            "end": 310,
            "decorators": [],
            "name": "Moose",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 311,
        "end": 336,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 317,
            "end": 334,
            "argument": {
              "type": "Identifier",
              "start": 324,
              "end": 333,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
