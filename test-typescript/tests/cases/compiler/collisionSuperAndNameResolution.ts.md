__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 214,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 39,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 39,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 11,
              "end": 39,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 13,
                "end": 39,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 19,
                    "end": 37,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 19,
                      "end": 22,
                      "decorators": [],
                      "name": "log",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 23,
                        "end": 35,
                        "decorators": [],
                        "name": "message",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 30,
                          "end": 35,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 32,
                            "end": 35
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false
                  }
                ]
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
      "type": "VariableDeclaration",
      "start": 40,
      "end": 56,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 55,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 50,
            "decorators": [],
            "name": "_super",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 53,
            "end": 55,
            "raw": "10",
            "value": 10
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 69,
      "end": 83,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 80,
        "end": 83,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 75,
        "end": 79,
        "decorators": [],
        "name": "base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 84,
      "end": 214,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 107,
        "end": 214,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 113,
            "end": 212,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 114,
              "end": 212,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 117,
                "end": 212,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 127,
                    "end": 147,
                    "expression": {
                      "type": "CallExpression",
                      "start": 127,
                      "end": 146,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 139,
                          "end": 145,
                          "decorators": [],
                          "name": "_super",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 127,
                        "end": 138,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 127,
                          "end": 134,
                          "decorators": [],
                          "name": "console",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 135,
                          "end": 138,
                          "decorators": [],
                          "name": "log",
                          "optional": false
                        }
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
        "start": 90,
        "end": 93,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 102,
        "end": 106,
        "decorators": [],
        "name": "base",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
