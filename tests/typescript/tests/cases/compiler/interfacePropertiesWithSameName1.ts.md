__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 260,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 74,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "decorators": [],
        "name": "Mover",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 74,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 22,
            "end": 35,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 26,
              "decorators": [],
              "name": "move",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 34,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 30,
                "end": 34
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 40,
            "end": 72,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 49,
              "decorators": [],
              "name": "getStatus",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 51,
              "end": 71,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 53,
                "end": 71,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 55,
                    "end": 69,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 55,
                      "end": 60,
                      "decorators": [],
                      "name": "speed",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 60,
                      "end": 68,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 62,
                        "end": 68
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 75,
      "end": 155,
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 91,
        "decorators": [],
        "name": "Shaker",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 92,
        "end": 155,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 98,
            "end": 112,
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 103,
              "decorators": [],
              "name": "shake",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 105,
              "end": 111,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 107,
                "end": 111
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 117,
            "end": 153,
            "key": {
              "type": "Identifier",
              "start": 117,
              "end": 126,
              "decorators": [],
              "name": "getStatus",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 128,
              "end": 152,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 130,
                "end": 152,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 132,
                    "end": 150,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 132,
                      "end": 141,
                      "decorators": [],
                      "name": "frequency",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 141,
                      "end": 149,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 143,
                        "end": 149
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 157,
      "end": 260,
      "id": {
        "type": "Identifier",
        "start": 167,
        "end": 178,
        "decorators": [],
        "name": "MoverShaker",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 187,
          "end": 192,
          "expression": {
            "type": "Identifier",
            "start": 187,
            "end": 192,
            "decorators": [],
            "name": "Mover",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        {
          "type": "TSInterfaceHeritage",
          "start": 194,
          "end": 200,
          "expression": {
            "type": "Identifier",
            "start": 194,
            "end": 200,
            "decorators": [],
            "name": "Shaker",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 201,
        "end": 260,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 207,
            "end": 258,
            "key": {
              "type": "Identifier",
              "start": 207,
              "end": 216,
              "decorators": [],
              "name": "getStatus",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 218,
              "end": 257,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 220,
                "end": 257,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 222,
                    "end": 236,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 222,
                      "end": 227,
                      "decorators": [],
                      "name": "speed",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 227,
                      "end": 235,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 229,
                        "end": 235
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 237,
                    "end": 255,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 237,
                      "end": 246,
                      "decorators": [],
                      "name": "frequency",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 246,
                      "end": 254,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 248,
                        "end": 254
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
