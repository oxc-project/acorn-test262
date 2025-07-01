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
        "name": "IProps",
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
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "iconProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 23,
              "end": 31
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 34,
                "end": 40
              },
              "start": 32,
              "end": 40
            },
            "accessibility": null,
            "static": false,
            "start": 23,
            "end": 41
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nestedProp",
              "optional": false,
              "typeAnnotation": null,
              "start": 46,
              "end": 56
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "testBool",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 69,
                      "end": 77
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 80,
                        "end": 87
                      },
                      "start": 78,
                      "end": 87
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 69,
                    "end": 88
                  }
                ],
                "start": 59,
                "end": 94
              },
              "start": 57,
              "end": 94
            },
            "accessibility": null,
            "static": false,
            "start": 46,
            "end": 94
          }
        ],
        "start": 17,
        "end": 96
      },
      "declare": false,
      "start": 0,
      "end": 96
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "INestedProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 120
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "nestedProps",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 138
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 141,
                  "end": 147
                },
                "typeArguments": null,
                "start": 141,
                "end": 147
              },
              "start": 139,
              "end": 147
            },
            "accessibility": null,
            "static": false,
            "start": 127,
            "end": 148
          }
        ],
        "start": 121,
        "end": 150
      },
      "declare": false,
      "start": 98,
      "end": 150
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "propB1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 208,
                      "end": 214
                    },
                    "typeArguments": null,
                    "start": 208,
                    "end": 214
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 217,
                    "end": 223
                  }
                ],
                "start": 208,
                "end": 223
              },
              "start": 206,
              "end": 223
            },
            "start": 200,
            "end": 223
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "INVALID_PROP_NAME",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 228,
                  "end": 245
                },
                "value": {
                  "type": "Literal",
                  "value": "share",
                  "raw": "'share'",
                  "start": 247,
                  "end": 254
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 228,
                "end": 254
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "iconProp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 256,
                  "end": 264
                },
                "value": {
                  "type": "Literal",
                  "value": "test",
                  "raw": "'test'",
                  "start": 266,
                  "end": 272
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 256,
                "end": 272
              }
            ],
            "start": 226,
            "end": 274
          },
          "definite": false,
          "start": 200,
          "end": 274
        }
      ],
      "declare": false,
      "start": 194,
      "end": 275
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "propB2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "IProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 354,
                      "end": 360
                    },
                    "typeArguments": null,
                    "start": 354,
                    "end": 360
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 363,
                    "end": 369
                  }
                ],
                "start": 354,
                "end": 369
              },
              "start": 352,
              "end": 369
            },
            "start": 346,
            "end": 369
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nestedProp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 374,
                  "end": 384
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "asdfasdf",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 388,
                        "end": 396
                      },
                      "value": {
                        "type": "Literal",
                        "value": "test",
                        "raw": "'test'",
                        "start": 398,
                        "end": 404
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 388,
                      "end": 404
                    }
                  ],
                  "start": 386,
                  "end": 406
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 374,
                "end": 406
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "iconProp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 408,
                  "end": 416
                },
                "value": {
                  "type": "Literal",
                  "value": "test",
                  "raw": "'test'",
                  "start": 418,
                  "end": 424
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 408,
                "end": 424
              }
            ],
            "start": 372,
            "end": 426
          },
          "definite": false,
          "start": 346,
          "end": 426
        }
      ],
      "declare": false,
      "start": 340,
      "end": 427
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "propA1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "INestedProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 496,
                      "end": 508
                    },
                    "typeArguments": null,
                    "start": 496,
                    "end": 508
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 511,
                    "end": 517
                  }
                ],
                "start": 496,
                "end": 517
              },
              "start": 494,
              "end": 517
            },
            "start": 488,
            "end": 517
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "nestedProps",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 522,
                  "end": 533
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "INVALID_PROP_NAME",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 537,
                        "end": 554
                      },
                      "value": {
                        "type": "Literal",
                        "value": "share",
                        "raw": "'share'",
                        "start": 556,
                        "end": 563
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 537,
                      "end": 563
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "iconProp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 565,
                        "end": 573
                      },
                      "value": {
                        "type": "Literal",
                        "value": "test",
                        "raw": "'test'",
                        "start": 575,
                        "end": 581
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 565,
                      "end": 581
                    }
                  ],
                  "start": 535,
                  "end": 583
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 522,
                "end": 583
              }
            ],
            "start": 520,
            "end": 585
          },
          "definite": false,
          "start": 488,
          "end": 585
        }
      ],
      "declare": false,
      "start": 482,
      "end": 586
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 586
}
```
