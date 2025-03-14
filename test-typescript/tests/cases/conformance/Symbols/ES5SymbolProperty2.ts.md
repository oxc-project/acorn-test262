__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 152,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 123,
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 123,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 15,
            "end": 31,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 19,
                "end": 30,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 19,
                  "end": 30,
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 25,
                    "end": 30,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 27,
                      "end": 30
                    }
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 37,
            "end": 91,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 44,
              "end": 91,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 52,
                "end": 91,
                "body": [
                  {
                    "type": "MethodDefinition",
                    "start": 62,
                    "end": 85,
                    "computed": true,
                    "decorators": [],
                    "key": {
                      "type": "MemberExpression",
                      "start": 63,
                      "end": 78,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 63,
                        "end": 69,
                        "decorators": [],
                        "name": "Symbol",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 70,
                        "end": 78,
                        "decorators": [],
                        "name": "iterator",
                        "optional": false
                      }
                    },
                    "kind": "method",
                    "optional": false,
                    "override": false,
                    "static": false,
                    "value": {
                      "type": "FunctionExpression",
                      "start": 79,
                      "end": 85,
                      "async": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 82,
                        "end": 85,
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
                "start": 50,
                "end": 51,
                "decorators": [],
                "name": "C",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExpressionStatement",
            "start": 96,
            "end": 121,
            "expression": {
              "type": "MemberExpression",
              "start": 96,
              "end": 120,
              "computed": true,
              "object": {
                "type": "NewExpression",
                "start": 97,
                "end": 102,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 102,
                  "decorators": [],
                  "name": "C",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "MemberExpression",
                "start": 104,
                "end": 119,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 110,
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 111,
                  "end": 119,
                  "decorators": [],
                  "name": "iterator",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "ExpressionStatement",
      "start": 125,
      "end": 152,
      "expression": {
        "type": "MemberExpression",
        "start": 125,
        "end": 151,
        "computed": true,
        "object": {
          "type": "NewExpression",
          "start": 126,
          "end": 133,
          "arguments": [],
          "callee": {
            "type": "MemberExpression",
            "start": 130,
            "end": 133,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 130,
              "end": 131,
              "decorators": [],
              "name": "M",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 132,
              "end": 133,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          }
        },
        "optional": false,
        "property": {
          "type": "MemberExpression",
          "start": 135,
          "end": 150,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 135,
            "end": 141,
            "decorators": [],
            "name": "Symbol",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 142,
            "end": 150,
            "decorators": [],
            "name": "iterator",
            "optional": false
          }
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
