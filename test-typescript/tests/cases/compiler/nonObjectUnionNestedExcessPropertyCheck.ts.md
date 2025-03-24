__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 586,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 96,
      "body": {
        "type": "TSInterfaceBody",
        "start": 17,
        "end": 96,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 23,
            "end": 41,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 23,
              "end": 31,
              "decorators": [],
              "name": "iconProp",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 32,
              "end": 40,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 34,
                "end": 40
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 46,
            "end": 94,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 46,
              "end": 56,
              "decorators": [],
              "name": "nestedProp",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 57,
              "end": 94,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 59,
                "end": 94,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 69,
                    "end": 88,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 69,
                      "end": 77,
                      "decorators": [],
                      "name": "testBool",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": true,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 78,
                      "end": 87,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 80,
                        "end": 87
                      }
                    }
                  }
                ]
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
        "name": "IProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 98,
      "end": 150,
      "body": {
        "type": "TSInterfaceBody",
        "start": 121,
        "end": 150,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 127,
            "end": 148,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 127,
              "end": 138,
              "decorators": [],
              "name": "nestedProps",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 147,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 141,
                "end": 147,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 147,
                  "decorators": [],
                  "name": "IProps",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 120,
        "decorators": [],
        "name": "INestedProps",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 194,
      "end": 275,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 200,
          "end": 274,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 200,
            "end": 223,
            "decorators": [],
            "name": "propB1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 206,
              "end": 223,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 208,
                "end": 223,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 208,
                    "end": 214,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 208,
                      "end": 214,
                      "decorators": [],
                      "name": "IProps",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 217,
                    "end": 223
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 226,
            "end": 274,
            "properties": [
              {
                "type": "Property",
                "start": 228,
                "end": 254,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 228,
                  "end": 245,
                  "decorators": [],
                  "name": "INVALID_PROP_NAME",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 247,
                  "end": 254,
                  "raw": "'share'",
                  "value": "share"
                }
              },
              {
                "type": "Property",
                "start": 256,
                "end": 272,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 256,
                  "end": 264,
                  "decorators": [],
                  "name": "iconProp",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 266,
                  "end": 272,
                  "raw": "'test'",
                  "value": "test"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 340,
      "end": 427,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 346,
          "end": 426,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 346,
            "end": 369,
            "decorators": [],
            "name": "propB2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 352,
              "end": 369,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 354,
                "end": 369,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 354,
                    "end": 360,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 354,
                      "end": 360,
                      "decorators": [],
                      "name": "IProps",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 363,
                    "end": 369
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 372,
            "end": 426,
            "properties": [
              {
                "type": "Property",
                "start": 374,
                "end": 406,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 374,
                  "end": 384,
                  "decorators": [],
                  "name": "nestedProp",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 386,
                  "end": 406,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 388,
                      "end": 404,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 388,
                        "end": 396,
                        "decorators": [],
                        "name": "asdfasdf",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 398,
                        "end": 404,
                        "raw": "'test'",
                        "value": "test"
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 408,
                "end": 424,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 408,
                  "end": 416,
                  "decorators": [],
                  "name": "iconProp",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 418,
                  "end": 424,
                  "raw": "'test'",
                  "value": "test"
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 482,
      "end": 586,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 488,
          "end": 585,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 488,
            "end": 517,
            "decorators": [],
            "name": "propA1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 494,
              "end": 517,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 496,
                "end": 517,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 496,
                    "end": 508,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 496,
                      "end": 508,
                      "decorators": [],
                      "name": "INestedProps",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 511,
                    "end": 517
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 520,
            "end": 585,
            "properties": [
              {
                "type": "Property",
                "start": 522,
                "end": 583,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 522,
                  "end": 533,
                  "decorators": [],
                  "name": "nestedProps",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 535,
                  "end": 583,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 537,
                      "end": 563,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 537,
                        "end": 554,
                        "decorators": [],
                        "name": "INVALID_PROP_NAME",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 556,
                        "end": 563,
                        "raw": "'share'",
                        "value": "share"
                      }
                    },
                    {
                      "type": "Property",
                      "start": 565,
                      "end": 581,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 565,
                        "end": 573,
                        "decorators": [],
                        "name": "iconProp",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 575,
                        "end": 581,
                        "raw": "'test'",
                        "value": "test"
                      }
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
