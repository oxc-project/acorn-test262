computedPropertyNames39_ES6.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 167,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 15,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 15,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 12,
            "end": 13,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 16,
      "end": 35,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 27,
        "end": 35,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 29,
            "end": 31,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 32,
            "end": 33,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 26,
        "decorators": [],
        "name": "Foo2",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 37,
      "end": 167,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 45,
        "end": 167,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 51,
            "end": 69,
            "parameters": [
              {
                "type": "Identifier",
                "start": 52,
                "end": 61,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 53,
                  "end": 61,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 55,
                    "end": 61
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 68,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 64,
                "end": 68,
                "typeName": {
                  "type": "Identifier",
                  "start": 64,
                  "end": 68,
                  "decorators": [],
                  "name": "Foo2",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 102,
            "end": 135,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "BinaryExpression",
              "start": 107,
              "end": 113,
              "operator": "<<",
              "left": {
                "type": "Literal",
                "start": 107,
                "end": 108,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "start": 112,
                "end": 113,
                "raw": "6",
                "value": 6
              }
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 114,
              "end": 135,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 117,
                "end": 135,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 119,
                    "end": 133,
                    "argument": {
                      "type": "NewExpression",
                      "start": 126,
                      "end": 133,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 130,
                        "end": 133,
                        "decorators": [],
                        "name": "Foo",
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
          },
          {
            "type": "MethodDefinition",
            "start": 140,
            "end": 165,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "BinaryExpression",
              "start": 145,
              "end": 151,
              "operator": "<<",
              "left": {
                "type": "Literal",
                "start": 145,
                "end": 146,
                "raw": "1",
                "value": 1
              },
              "right": {
                "type": "Literal",
                "start": 150,
                "end": 151,
                "raw": "6",
                "value": 6
              }
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 152,
              "end": 165,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 162,
                "end": 165,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 153,
                  "end": 160,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 154,
                    "end": 160,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 156,
                      "end": 160,
                      "typeName": {
                        "type": "Identifier",
                        "start": 156,
                        "end": 160,
                        "decorators": [],
                        "name": "Foo2",
                        "optional": false
                      }
                    }
                  }
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
        "start": 43,
        "end": 44,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
