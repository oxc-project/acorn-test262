__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 350,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 157,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 157,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 17,
            "end": 37,
            "accessibility": "protected",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 36,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 30,
                "end": 36
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 42,
            "end": 91,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 54,
              "decorators": [],
              "name": "fn",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 54,
              "end": 91,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 65,
                "end": 91,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 75,
                    "end": 85,
                    "argument": {
                      "type": "Literal",
                      "start": 82,
                      "end": 84,
                      "raw": "''",
                      "value": ""
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 56,
                "end": 64,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 58,
                  "end": 64
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 97,
            "end": 128,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 111,
              "end": 112,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 112,
              "end": 128,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 115,
                "end": 128,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 117,
                    "end": 126,
                    "argument": {
                      "type": "Literal",
                      "start": 124,
                      "end": 125,
                      "raw": "1",
                      "value": 1
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
            "start": 133,
            "end": 155,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 147,
              "end": 148,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 148,
              "end": 155,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 152,
                "end": 155,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 149,
                  "end": 150,
                  "decorators": [],
                  "name": "v",
                  "optional": false
                }
              ]
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
      "start": 183,
      "end": 349,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 210,
        "end": 349,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 216,
            "end": 234,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 224,
              "end": 225,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 225,
              "end": 233,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 227,
                "end": 233
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 240,
            "end": 287,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 248,
              "end": 250,
              "decorators": [],
              "name": "fn",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 250,
              "end": 287,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 261,
                "end": 287,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 271,
                    "end": 281,
                    "argument": {
                      "type": "Literal",
                      "start": 278,
                      "end": 280,
                      "raw": "''",
                      "value": ""
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 252,
                "end": 260,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 254,
                  "end": 260
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 293,
            "end": 322,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 305,
              "end": 306,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 306,
              "end": 322,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 309,
                "end": 322,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 311,
                    "end": 320,
                    "argument": {
                      "type": "Literal",
                      "start": 318,
                      "end": 319,
                      "raw": "1",
                      "value": 1
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
            "start": 327,
            "end": 347,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 339,
              "end": 340,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 340,
              "end": 347,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 344,
                "end": 347,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 341,
                  "end": 342,
                  "decorators": [],
                  "name": "v",
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 189,
        "end": 196,
        "decorators": [],
        "name": "Derived",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 205,
        "end": 209,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
