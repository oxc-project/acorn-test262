__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 502,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 65,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 65,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 18,
            "end": 31,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 22,
              "decorators": [],
              "name": "prop",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 22,
              "end": 30,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 24,
                "end": 30
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 36,
            "end": 48,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 39,
              "decorators": [],
              "name": "raw",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 47,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 41,
                "end": 47
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 53,
            "end": 63,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 53,
              "end": 54,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 62,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 58,
                "end": 62
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 66,
      "end": 295,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 96,
        "end": 295,
        "body": [
          {
            "type": "TSAbstractPropertyDefinition",
            "start": 102,
            "end": 124,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 111,
              "end": 115,
              "decorators": [],
              "name": "prop",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 115,
              "end": 123,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 117,
                "end": 123
              }
            },
            "value": null
          },
          {
            "type": "TSAbstractPropertyDefinition",
            "start": 129,
            "end": 150,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 138,
              "end": 141,
              "decorators": [],
              "name": "raw",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 141,
              "end": 149,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 143,
                "end": 149
              }
            },
            "value": null
          },
          {
            "type": "TSAbstractPropertyDefinition",
            "start": 155,
            "end": 184,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 173,
              "end": 175,
              "decorators": [],
              "name": "ro",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 175,
              "end": 183,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 177,
                "end": 183
              }
            },
            "value": null
          },
          {
            "type": "TSAbstractMethodDefinition",
            "start": 189,
            "end": 225,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 202,
              "end": 214,
              "decorators": [],
              "name": "readonlyProp",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 214,
              "end": 225,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 216,
                "end": 224,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 218,
                  "end": 224
                }
              }
            }
          },
          {
            "type": "TSAbstractMethodDefinition",
            "start": 230,
            "end": 269,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 243,
              "end": 255,
              "decorators": [],
              "name": "readonlyProp",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 255,
              "end": 269,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 256,
                  "end": 267,
                  "decorators": [],
                  "name": "val",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 259,
                    "end": 267,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 261,
                      "end": 267
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "TSAbstractMethodDefinition",
            "start": 274,
            "end": 293,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 283,
              "end": 284,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 284,
              "end": 293,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 286,
                "end": 292,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 288,
                  "end": 292
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 82,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 94,
          "end": 95,
          "expression": {
            "type": "Identifier",
            "start": 94,
            "end": 95,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      ],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 296,
      "end": 502,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 314,
        "end": 502,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 320,
            "end": 348,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 324,
              "end": 328,
              "decorators": [],
              "name": "prop",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 328,
              "end": 348,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 331,
                "end": 348,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 333,
                    "end": 346,
                    "argument": {
                      "type": "Literal",
                      "start": 340,
                      "end": 345,
                      "raw": "\"foo\"",
                      "value": "foo"
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 353,
            "end": 368,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 357,
              "end": 361,
              "decorators": [],
              "name": "prop",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 361,
              "end": 368,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 365,
                "end": 368,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 362,
                  "end": 363,
                  "decorators": [],
                  "name": "v",
                  "optional": false
                }
              ]
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 373,
            "end": 386,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 373,
              "end": 376,
              "decorators": [],
              "name": "raw",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 379,
              "end": 385,
              "raw": "\"edge\"",
              "value": "edge"
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 391,
            "end": 423,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 400,
              "end": 402,
              "decorators": [],
              "name": "ro",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": true,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 405,
              "end": 422,
              "raw": "\"readonly please\"",
              "value": "readonly please"
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 428,
            "end": 449,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 428,
              "end": 440,
              "decorators": [],
              "name": "readonlyProp",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 440,
              "end": 448,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 442,
                "end": 448
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 493,
            "end": 500,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 493,
              "end": 494,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 494,
              "end": 500,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 497,
                "end": 500,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 302,
        "end": 303,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 312,
        "end": 313,
        "decorators": [],
        "name": "B",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
