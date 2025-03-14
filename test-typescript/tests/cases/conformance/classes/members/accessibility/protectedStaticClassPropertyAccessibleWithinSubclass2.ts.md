protectedStaticClassPropertyAccessibleWithinSubclass2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 601,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 149,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 149,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 44,
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 43,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 37,
                "end": 43
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 49,
            "end": 147,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 68,
              "decorators": [],
              "name": "staticMethod",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 68,
              "end": 147,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 71,
                "end": 147,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 81,
                    "end": 88,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 81,
                      "end": 87,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 81,
                        "end": 85
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 86,
                        "end": 87,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 151,
      "end": 357,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 179,
        "end": 357,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 185,
            "end": 355,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 192,
              "end": 205,
              "decorators": [],
              "name": "staticMethod1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 205,
              "end": 355,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 208,
                "end": 355,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 218,
                    "end": 225,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 218,
                      "end": 224,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 218,
                        "end": 222
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 223,
                        "end": 224,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 308,
                    "end": 316,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 308,
                      "end": 315,
                      "computed": false,
                      "object": {
                        "type": "Super",
                        "start": 308,
                        "end": 313
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 314,
                        "end": 315,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 165,
        "decorators": [],
        "name": "Derived1",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 174,
        "end": 178,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 359,
      "end": 601,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 391,
        "end": 601,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 397,
            "end": 424,
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 414,
              "end": 415,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 415,
              "end": 423,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 417,
                "end": 423
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 429,
            "end": 599,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 436,
              "end": 449,
              "decorators": [],
              "name": "staticMethod3",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 449,
              "end": 599,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 452,
                "end": 599,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 462,
                    "end": 469,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 462,
                      "end": 468,
                      "computed": false,
                      "object": {
                        "type": "ThisExpression",
                        "start": 462,
                        "end": 466
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 467,
                        "end": 468,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 552,
                    "end": 560,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 552,
                      "end": 559,
                      "computed": false,
                      "object": {
                        "type": "Super",
                        "start": 552,
                        "end": 557
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 558,
                        "end": 559,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 365,
        "end": 373,
        "decorators": [],
        "name": "Derived2",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 382,
        "end": 390,
        "decorators": [],
        "name": "Derived1",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
