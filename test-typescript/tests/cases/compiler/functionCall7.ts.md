functionCall7.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 145,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 42,
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 42,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 12,
            "end": 41,
            "attributes": [],
            "declaration": {
              "type": "ClassDeclaration",
              "start": 19,
              "end": 41,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 28,
                "end": 41,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 30,
                    "end": 39,
                    "accessibility": "public",
                    "computed": false,
                    "declare": false,
                    "decorators": [],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 37,
                      "end": 38,
                      "decorators": [],
                      "name": "a",
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
                "start": 25,
                "end": 27,
                "decorators": [],
                "name": "c1",
                "optional": false
              },
              "implements": [],
              "superClass": null
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "decorators": [],
        "name": "m1",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "FunctionDeclaration",
      "start": 43,
      "end": 76,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 64,
        "end": 76,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 66,
            "end": 74,
            "expression": {
              "type": "AssignmentExpression",
              "start": 66,
              "end": 73,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 66,
                "end": 69,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 66,
                  "end": 67,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 69,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 72,
                "end": 73,
                "raw": "1",
                "value": 1
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 52,
        "end": 55,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 56,
          "end": 63,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 57,
            "end": 63,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 58,
              "end": 63,
              "typeName": {
                "type": "TSQualifiedName",
                "start": 58,
                "end": 63,
                "left": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 60,
                  "decorators": [],
                  "name": "m1",
                  "optional": false
                },
                "right": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 63,
                  "decorators": [],
                  "name": "c1",
                  "optional": false
                }
              }
            }
          }
        }
      ]
    },
    {
      "type": "EmptyStatement",
      "start": 76,
      "end": 77
    },
    {
      "type": "VariableDeclaration",
      "start": 79,
      "end": 101,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 83,
          "end": 100,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 86,
            "decorators": [],
            "name": "myC",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 89,
            "end": 100,
            "arguments": [],
            "callee": {
              "type": "MemberExpression",
              "start": 93,
              "end": 98,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 93,
                "end": 95,
                "decorators": [],
                "name": "m1",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 96,
                "end": 98,
                "decorators": [],
                "name": "c1",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 103,
      "end": 112,
      "expression": {
        "type": "CallExpression",
        "start": 103,
        "end": 111,
        "arguments": [
          {
            "type": "Identifier",
            "start": 107,
            "end": 110,
            "decorators": [],
            "name": "myC",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 103,
          "end": 106,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 114,
      "end": 128,
      "expression": {
        "type": "CallExpression",
        "start": 114,
        "end": 127,
        "arguments": [
          {
            "type": "Identifier",
            "start": 118,
            "end": 121,
            "decorators": [],
            "name": "myC",
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 123,
            "end": 126,
            "decorators": [],
            "name": "myC",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 114,
          "end": 117,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 130,
      "end": 137,
      "expression": {
        "type": "CallExpression",
        "start": 130,
        "end": 136,
        "arguments": [
          {
            "type": "Literal",
            "start": 134,
            "end": 135,
            "raw": "4",
            "value": 4
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 130,
          "end": 133,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 138,
      "end": 144,
      "expression": {
        "type": "CallExpression",
        "start": 138,
        "end": 143,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 138,
          "end": 141,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
