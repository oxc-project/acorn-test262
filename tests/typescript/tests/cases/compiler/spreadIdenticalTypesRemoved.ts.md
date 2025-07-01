__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 16
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 27
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 29,
                "end": 35
              },
              "start": 27,
              "end": 35
            },
            "accessibility": null,
            "static": false,
            "start": 23,
            "end": 36
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 45
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 47,
                "end": 53
              },
              "start": 45,
              "end": 53
            },
            "accessibility": null,
            "static": false,
            "start": 41,
            "end": 54
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "age",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 62
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 64,
                "end": 70
              },
              "start": 62,
              "end": 70
            },
            "accessibility": null,
            "static": false,
            "start": 59,
            "end": 71
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "location",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 84
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 86,
                "end": 92
              },
              "start": 84,
              "end": 92
            },
            "accessibility": null,
            "static": false,
            "start": 76,
            "end": 93
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "owner",
              "optional": false,
              "typeAnnotation": null,
              "start": 98,
              "end": 103
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 105,
                "end": 111
              },
              "start": 103,
              "end": 111
            },
            "accessibility": null,
            "static": false,
            "start": 98,
            "end": 112
          }
        ],
        "start": 17,
        "end": 114
      },
      "declare": false,
      "start": 0,
      "end": 114
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "clonePet",
        "optional": false,
        "typeAnnotation": null,
        "start": 125,
        "end": 133
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "pet",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Animal",
                "optional": false,
                "typeAnnotation": null,
                "start": 139,
                "end": 145
              },
              "typeArguments": null,
              "start": 139,
              "end": 145
            },
            "start": 137,
            "end": 145
          },
          "start": 134,
          "end": 145
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "fullCopy",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 158,
              "end": 165
            },
            "start": 156,
            "end": 165
          },
          "start": 147,
          "end": 165
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 190,
                    "end": 194
                  },
                  "value": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "pet",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 196,
                      "end": 199
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 200,
                      "end": 204
                    },
                    "optional": false,
                    "computed": false,
                    "start": 196,
                    "end": 204
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 190,
                  "end": 204
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 214,
                    "end": 218
                  },
                  "value": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "pet",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 220,
                      "end": 223
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 224,
                      "end": 228
                    },
                    "optional": false,
                    "computed": false,
                    "start": 220,
                    "end": 228
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 214,
                  "end": 228
                },
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "fullCopy",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 242,
                      "end": 250
                    },
                    "operator": "&&",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "pet",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 254,
                      "end": 257
                    },
                    "start": 242,
                    "end": 257
                  },
                  "start": 238,
                  "end": 258
                }
              ],
              "start": 180,
              "end": 265
            },
            "start": 173,
            "end": 265
          }
        ],
        "start": 167,
        "end": 267
      },
      "expression": false,
      "start": 116,
      "end": 267
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Animal2",
        "optional": false,
        "typeAnnotation": null,
        "start": 279,
        "end": 286
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null,
              "start": 293,
              "end": 297
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 299,
                "end": 305
              },
              "start": 297,
              "end": 305
            },
            "accessibility": null,
            "static": false,
            "start": 293,
            "end": 306
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "owner",
              "optional": false,
              "typeAnnotation": null,
              "start": 311,
              "end": 316
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 319,
                "end": 325
              },
              "start": 317,
              "end": 325
            },
            "accessibility": null,
            "static": false,
            "start": 311,
            "end": 326
          }
        ],
        "start": 287,
        "end": 328
      },
      "declare": false,
      "start": 269,
      "end": 328
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "billOwner",
        "optional": false,
        "typeAnnotation": null,
        "start": 338,
        "end": 347
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "pet",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Animal2",
                "optional": false,
                "typeAnnotation": null,
                "start": 353,
                "end": 360
              },
              "typeArguments": null,
              "start": 353,
              "end": 360
            },
            "start": 351,
            "end": 360
          },
          "start": 348,
          "end": 360
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "SpreadElement",
                  "argument": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "pet",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 389,
                        "end": 392
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "owner",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 393,
                        "end": 398
                      },
                      "optional": false,
                      "computed": false,
                      "start": 389,
                      "end": 398
                    },
                    "operator": "&&",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "pet",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 402,
                      "end": 405
                    },
                    "start": 389,
                    "end": 405
                  },
                  "start": 385,
                  "end": 406
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "paid",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 416,
                    "end": 420
                  },
                  "value": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 422,
                    "end": 427
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 416,
                  "end": 427
                }
              ],
              "start": 375,
              "end": 433
            },
            "start": 368,
            "end": 433
          }
        ],
        "start": 362,
        "end": 435
      },
      "expression": false,
      "start": 329,
      "end": 435
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 435
}
```
