__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 352,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 352,
      "id": {
        "type": "Identifier",
        "start": 16,
        "end": 20,
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 21,
          "end": 39,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 22,
            "end": 39,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 24,
              "end": 39,
              "typeName": {
                "type": "Identifier",
                "start": 24,
                "end": 31,
                "decorators": [],
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 31,
                "end": 39,
                "params": [
                  {
                    "type": "TSStringKeyword",
                    "start": 32,
                    "end": 38
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 41,
        "end": 352,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 47,
            "end": 193,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 53,
              "end": 54,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 55,
              "end": 193,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 65,
                  "end": 85,
                  "decorators": [],
                  "key": {
                    "type": "AwaitExpression",
                    "start": 66,
                    "end": 73,
                    "argument": {
                      "type": "Identifier",
                      "start": 72,
                      "end": 73,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "AwaitExpression",
                    "start": 77,
                    "end": 84,
                    "argument": {
                      "type": "Identifier",
                      "start": 83,
                      "end": 84,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "computed": true,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 94,
                  "end": 121,
                  "decorators": [],
                  "key": {
                    "type": "AwaitExpression",
                    "start": 102,
                    "end": 109,
                    "argument": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 109,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "AwaitExpression",
                    "start": 113,
                    "end": 120,
                    "argument": {
                      "type": "Identifier",
                      "start": 119,
                      "end": 120,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "computed": true,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 131,
                  "end": 151,
                  "decorators": [],
                  "key": {
                    "type": "YieldExpression",
                    "start": 132,
                    "end": 139,
                    "delegate": false,
                    "argument": {
                      "type": "Literal",
                      "start": 138,
                      "end": 139,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "YieldExpression",
                    "start": 143,
                    "end": 150,
                    "delegate": false,
                    "argument": {
                      "type": "Literal",
                      "start": 149,
                      "end": 150,
                      "value": 2,
                      "raw": "2"
                    }
                  },
                  "computed": true,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 160,
                  "end": 187,
                  "decorators": [],
                  "key": {
                    "type": "YieldExpression",
                    "start": 168,
                    "end": 175,
                    "delegate": false,
                    "argument": {
                      "type": "Literal",
                      "start": 174,
                      "end": 175,
                      "value": 3,
                      "raw": "3"
                    }
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "YieldExpression",
                    "start": 179,
                    "end": 186,
                    "delegate": false,
                    "argument": {
                      "type": "Literal",
                      "start": 185,
                      "end": 186,
                      "value": 4,
                      "raw": "4"
                    }
                  },
                  "computed": true,
                  "static": true,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 199,
            "end": 350,
            "argument": {
              "type": "ClassExpression",
              "start": 206,
              "end": 350,
              "decorators": [],
              "id": null,
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "start": 212,
                "end": 350,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 222,
                    "end": 242,
                    "decorators": [],
                    "key": {
                      "type": "AwaitExpression",
                      "start": 223,
                      "end": 230,
                      "argument": {
                        "type": "Identifier",
                        "start": 229,
                        "end": 230,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "AwaitExpression",
                      "start": 234,
                      "end": 241,
                      "argument": {
                        "type": "Identifier",
                        "start": 240,
                        "end": 241,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "computed": true,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 251,
                    "end": 278,
                    "decorators": [],
                    "key": {
                      "type": "AwaitExpression",
                      "start": 259,
                      "end": 266,
                      "argument": {
                        "type": "Identifier",
                        "start": 265,
                        "end": 266,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "AwaitExpression",
                      "start": 270,
                      "end": 277,
                      "argument": {
                        "type": "Identifier",
                        "start": 276,
                        "end": 277,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "computed": true,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 288,
                    "end": 308,
                    "decorators": [],
                    "key": {
                      "type": "YieldExpression",
                      "start": 289,
                      "end": 296,
                      "delegate": false,
                      "argument": {
                        "type": "Literal",
                        "start": 295,
                        "end": 296,
                        "value": 1,
                        "raw": "1"
                      }
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "YieldExpression",
                      "start": 300,
                      "end": 307,
                      "delegate": false,
                      "argument": {
                        "type": "Literal",
                        "start": 306,
                        "end": 307,
                        "value": 2,
                        "raw": "2"
                      }
                    },
                    "computed": true,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null
                  },
                  {
                    "type": "PropertyDefinition",
                    "start": 317,
                    "end": 344,
                    "decorators": [],
                    "key": {
                      "type": "YieldExpression",
                      "start": 325,
                      "end": 332,
                      "delegate": false,
                      "argument": {
                        "type": "Literal",
                        "start": 331,
                        "end": 332,
                        "value": 3,
                        "raw": "3"
                      }
                    },
                    "typeAnnotation": null,
                    "value": {
                      "type": "YieldExpression",
                      "start": 336,
                      "end": 343,
                      "delegate": false,
                      "argument": {
                        "type": "Literal",
                        "start": 342,
                        "end": 343,
                        "value": 4,
                        "raw": "4"
                      }
                    },
                    "computed": true,
                    "static": true,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": null
                  }
                ]
              },
              "abstract": false,
              "declare": false
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
