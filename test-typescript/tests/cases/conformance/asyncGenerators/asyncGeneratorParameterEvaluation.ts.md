asyncGeneratorParameterEvaluation.ts
```json
{
  "type": "Program",
  "start": 56,
  "end": 237,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 56,
      "end": 87,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 85,
        "end": 87,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 74,
        "decorators": [],
        "name": "f1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 75,
          "end": 76,
          "decorators": [],
          "name": "x",
          "optional": false
        },
        {
          "type": "AssignmentPattern",
          "start": 78,
          "end": 83,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 78,
            "end": 79,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "Identifier",
            "start": 82,
            "end": 83,
            "decorators": [],
            "name": "z",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 88,
      "end": 119,
      "async": true,
      "body": {
        "type": "BlockStatement",
        "start": 117,
        "end": 119,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 106,
        "decorators": [],
        "name": "f2",
        "optional": false
      },
      "params": [
        {
          "type": "ObjectPattern",
          "start": 107,
          "end": 115,
          "decorators": [],
          "optional": false,
          "properties": [
            {
              "type": "Property",
              "start": 108,
              "end": 114,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 109,
                "end": 110,
                "decorators": [],
                "name": "z",
                "optional": false
              },
              "kind": "init",
              "method": false,
              "optional": false,
              "shorthand": false,
              "value": {
                "type": "Identifier",
                "start": 113,
                "end": 114,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            }
          ]
        }
      ]
    },
    {
      "type": "ClassDeclaration",
      "start": 121,
      "end": 157,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 141,
        "end": 157,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 143,
            "end": 155,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 143,
              "end": 146,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 146,
              "end": 155,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 148,
                "end": 154,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 150,
                  "end": 154
                }
              }
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 140,
        "decorators": [],
        "name": "Super",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 158,
      "end": 236,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 182,
        "end": 236,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 188,
            "end": 234,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 196,
              "end": 197,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 197,
              "end": 234,
              "async": true,
              "body": {
                "type": "BlockStatement",
                "start": 218,
                "end": 234,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 220,
                    "end": 232,
                    "expression": {
                      "type": "CallExpression",
                      "start": 220,
                      "end": 231,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 220,
                        "end": 229,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 220,
                          "end": 225
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 226,
                          "end": 229,
                          "decorators": [],
                          "name": "foo",
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
              "generator": true,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 198,
                  "end": 199,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                {
                  "type": "AssignmentPattern",
                  "start": 201,
                  "end": 206,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 201,
                    "end": 202,
                    "decorators": [],
                    "name": "y",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Identifier",
                    "start": 205,
                    "end": 206,
                    "decorators": [],
                    "name": "z",
                    "optional": false
                  }
                },
                {
                  "type": "ObjectPattern",
                  "start": 208,
                  "end": 216,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "RestElement",
                      "start": 210,
                      "end": 214,
                      "argument": {
                        "type": "Identifier",
                        "start": 213,
                        "end": 214,
                        "decorators": [],
                        "name": "w",
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ]
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
        "start": 164,
        "end": 167,
        "decorators": [],
        "name": "Sub",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 176,
        "end": 181,
        "decorators": [],
        "name": "Super",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
