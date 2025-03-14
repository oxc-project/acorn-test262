superPropertyAccessInSuperCall01.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 143,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 78,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 78,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 11,
            "end": 38,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 11,
              "end": 22,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 22,
              "end": 38,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 34,
                "end": 38,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 23,
                  "end": 32,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 24,
                    "end": 32,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 26,
                      "end": 32
                    }
                  }
                }
              ]
            }
          },
          {
            "type": "MethodDefinition",
            "start": 40,
            "end": 76,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 47,
              "end": 51,
              "decorators": [],
              "name": "blah",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 51,
              "end": 76,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 62,
                "end": 76,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 64,
                    "end": 74,
                    "argument": {
                      "type": "Literal",
                      "start": 71,
                      "end": 73,
                      "raw": "\"\"",
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
                "start": 53,
                "end": 61,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 55,
                  "end": 61
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
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 80,
      "end": 143,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 98,
        "end": 143,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 101,
            "end": 141,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 101,
              "end": 112,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 112,
              "end": 141,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 115,
                "end": 141,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 119,
                    "end": 138,
                    "expression": {
                      "type": "CallExpression",
                      "start": 119,
                      "end": 138,
                      "arguments": [
                        {
                          "type": "CallExpression",
                          "start": 125,
                          "end": 137,
                          "arguments": [],
                          "callee": {
                            "type": "MemberExpression",
                            "start": 125,
                            "end": 135,
                            "computed": false,
                            "object": {
                              "type": "Super",
                              "start": 125,
                              "end": 130
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 131,
                              "end": 135,
                              "decorators": [],
                              "name": "blah",
                              "optional": false
                            }
                          },
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Super",
                        "start": 119,
                        "end": 124
                      },
                      "optional": false
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
        "start": 86,
        "end": 87,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 96,
        "end": 97,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
