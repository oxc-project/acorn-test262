__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 150,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 53,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 53,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 16,
            "end": 51,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 27,
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
              "start": 27,
              "end": 51,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 48,
                "end": 51,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 28,
                  "end": 46,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 35,
                    "end": 46,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 38,
                      "end": 46,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 40,
                        "end": 46
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
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
        "end": 9,
        "decorators": [],
        "name": "Bar",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 54,
      "end": 76,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 58,
          "end": 75,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 58,
            "end": 61,
            "decorators": [],
            "name": "one",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 64,
            "end": 75,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 72,
                "end": 74,
                "properties": []
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 68,
              "end": 71,
              "decorators": [],
              "name": "Bar",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 86,
      "end": 148,
      "expression": {
        "type": "CallExpression",
        "start": 86,
        "end": 147,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 97,
            "end": 146,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 103,
              "end": 146,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 109,
                  "end": 131,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 113,
                      "end": 130,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 113,
                        "end": 116,
                        "decorators": [],
                        "name": "two",
                        "optional": false
                      },
                      "init": {
                        "type": "NewExpression",
                        "start": 119,
                        "end": 130,
                        "arguments": [
                          {
                            "type": "ObjectExpression",
                            "start": 127,
                            "end": 129,
                            "properties": []
                          }
                        ],
                        "callee": {
                          "type": "Identifier",
                          "start": 123,
                          "end": 126,
                          "decorators": [],
                          "name": "Bar",
                          "optional": false
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                }
              ]
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": []
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 86,
          "end": 96,
          "computed": false,
          "object": {
            "type": "ArrayExpression",
            "start": 86,
            "end": 88,
            "elements": []
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 89,
            "end": 96,
            "decorators": [],
            "name": "forEach",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
