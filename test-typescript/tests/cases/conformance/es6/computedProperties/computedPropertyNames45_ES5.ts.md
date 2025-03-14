computedPropertyNames45_ES5.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 248,
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
      "end": 86,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 45,
        "end": 86,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 51,
            "end": 84,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 56,
              "end": 62,
              "raw": "\"get1\"",
              "value": "get1"
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 63,
              "end": 84,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 66,
                "end": 84,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 68,
                    "end": 82,
                    "argument": {
                      "type": "NewExpression",
                      "start": 75,
                      "end": 82,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 79,
                        "end": 82,
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
    },
    {
      "type": "ClassDeclaration",
      "start": 88,
      "end": 248,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 106,
        "end": 248,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 199,
            "end": 217,
            "parameters": [
              {
                "type": "Identifier",
                "start": 200,
                "end": 209,
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 201,
                  "end": 209,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 203,
                    "end": 209
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 210,
              "end": 216,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 212,
                "end": 216,
                "typeName": {
                  "type": "Identifier",
                  "start": 212,
                  "end": 216,
                  "decorators": [],
                  "name": "Foo2",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 222,
            "end": 246,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "Literal",
              "start": 227,
              "end": 233,
              "raw": "\"set1\"",
              "value": "set1"
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 234,
              "end": 246,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 243,
                "end": 246,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 235,
                  "end": 241,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 236,
                    "end": 241,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 238,
                      "end": 241,
                      "typeName": {
                        "type": "Identifier",
                        "start": 238,
                        "end": 241,
                        "decorators": [],
                        "name": "Foo",
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
        "start": 94,
        "end": 95,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 104,
        "end": 105,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
