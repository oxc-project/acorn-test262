__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 435,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 114,
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 114,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 23,
            "end": 36,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 27,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 35,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 29,
                "end": 35
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 41,
            "end": 54,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 41,
              "end": 45,
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 53,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 47,
                "end": 53
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 59,
            "end": 71,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 59,
              "end": 62,
              "decorators": [],
              "name": "age",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 70,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 64,
                "end": 70
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 76,
            "end": 93,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 76,
              "end": 84,
              "decorators": [],
              "name": "location",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 84,
              "end": 92,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 86,
                "end": 92
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 98,
            "end": 112,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 103,
              "decorators": [],
              "name": "owner",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 103,
              "end": 111,
              "typeAnnotation": {
                "type": "TSObjectKeyword",
                "start": 105,
                "end": 111
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 16,
        "decorators": [],
        "name": "Animal",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 116,
      "end": 267,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 167,
        "end": 267,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 173,
            "end": 265,
            "argument": {
              "type": "ObjectExpression",
              "start": 180,
              "end": 265,
              "properties": [
                {
                  "type": "Property",
                  "start": 190,
                  "end": 204,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 190,
                    "end": 194,
                    "decorators": [],
                    "name": "name",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "MemberExpression",
                    "start": 196,
                    "end": 204,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 196,
                      "end": 199,
                      "decorators": [],
                      "name": "pet",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 200,
                      "end": 204,
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "Property",
                  "start": 214,
                  "end": 228,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 214,
                    "end": 218,
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "MemberExpression",
                    "start": 220,
                    "end": 228,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 220,
                      "end": 223,
                      "decorators": [],
                      "name": "pet",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 224,
                      "end": 228,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "SpreadElement",
                  "start": 238,
                  "end": 258,
                  "argument": {
                    "type": "LogicalExpression",
                    "start": 242,
                    "end": 257,
                    "operator": "&&",
                    "left": {
                      "type": "Identifier",
                      "start": 242,
                      "end": 250,
                      "decorators": [],
                      "name": "fullCopy",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 254,
                      "end": 257,
                      "decorators": [],
                      "name": "pet",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 125,
        "end": 133,
        "decorators": [],
        "name": "clonePet",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 134,
          "end": 145,
          "decorators": [],
          "name": "pet",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 137,
            "end": 145,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 139,
              "end": 145,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 139,
                "end": 145,
                "decorators": [],
                "name": "Animal",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 147,
          "end": 165,
          "decorators": [],
          "name": "fullCopy",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 156,
            "end": 165,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 158,
              "end": 165
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 269,
      "end": 328,
      "body": {
        "type": "TSInterfaceBody",
        "start": 287,
        "end": 328,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 293,
            "end": 306,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 293,
              "end": 297,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 297,
              "end": 305,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 299,
                "end": 305
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 311,
            "end": 326,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 311,
              "end": 316,
              "decorators": [],
              "name": "owner",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 317,
              "end": 325,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 319,
                "end": 325
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 279,
        "end": 286,
        "decorators": [],
        "name": "Animal2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 329,
      "end": 435,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 362,
        "end": 435,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 368,
            "end": 433,
            "argument": {
              "type": "ObjectExpression",
              "start": 375,
              "end": 433,
              "properties": [
                {
                  "type": "SpreadElement",
                  "start": 385,
                  "end": 406,
                  "argument": {
                    "type": "LogicalExpression",
                    "start": 389,
                    "end": 405,
                    "operator": "&&",
                    "left": {
                      "type": "MemberExpression",
                      "start": 389,
                      "end": 398,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 389,
                        "end": 392,
                        "decorators": [],
                        "name": "pet",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 393,
                        "end": 398,
                        "decorators": [],
                        "name": "owner",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 402,
                      "end": 405,
                      "decorators": [],
                      "name": "pet",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                {
                  "type": "Property",
                  "start": 416,
                  "end": 427,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 416,
                    "end": 420,
                    "decorators": [],
                    "name": "paid",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 422,
                    "end": 427,
                    "raw": "false",
                    "value": false
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 338,
        "end": 347,
        "decorators": [],
        "name": "billOwner",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 348,
          "end": 360,
          "decorators": [],
          "name": "pet",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 351,
            "end": 360,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 353,
              "end": 360,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 353,
                "end": 360,
                "decorators": [],
                "name": "Animal2",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
