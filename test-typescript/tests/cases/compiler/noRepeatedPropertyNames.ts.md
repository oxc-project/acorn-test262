noRepeatedPropertyNames.ts
```json
{
  "type": "Program",
  "start": 56,
  "end": 178,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 85,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 84,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 67,
            "decorators": [],
            "name": "first",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 70,
            "end": 84,
            "properties": [
              {
                "type": "Property",
                "start": 72,
                "end": 76,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 73,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 75,
                  "end": 76,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 78,
                "end": 82,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 78,
                  "end": 79,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 81,
                  "end": 82,
                  "raw": "2",
                  "value": 2
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ClassDeclaration",
      "start": 86,
      "end": 177,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 94,
        "end": 177,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 100,
            "end": 175,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 100,
              "end": 101,
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
              "start": 101,
              "end": 175,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 104,
                "end": 175,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 114,
                    "end": 144,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 120,
                        "end": 143,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 120,
                          "end": 126,
                          "decorators": [],
                          "name": "second",
                          "optional": false
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "start": 129,
                          "end": 143,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 131,
                              "end": 135,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 131,
                                "end": 132,
                                "decorators": [],
                                "name": "a",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "start": 134,
                                "end": 135,
                                "raw": "1",
                                "value": 1
                              }
                            },
                            {
                              "type": "Property",
                              "start": 137,
                              "end": 141,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 137,
                                "end": 138,
                                "decorators": [],
                                "name": "a",
                                "optional": false
                              },
                              "kind": "init",
                              "method": false,
                              "optional": false,
                              "shorthand": false,
                              "value": {
                                "type": "Literal",
                                "start": 140,
                                "end": 141,
                                "raw": "2",
                                "value": 2
                              }
                            }
                          ]
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 153,
                    "end": 169,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 160,
                      "end": 168,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 160,
                        "end": 166,
                        "decorators": [],
                        "name": "second",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 167,
                        "end": 168,
                        "decorators": [],
                        "name": "a",
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
        "start": 92,
        "end": 93,
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
