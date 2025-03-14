classExpressionWithStaticProperties2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 124,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 124,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 123,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "v",
            "optional": false
          },
          "init": {
            "type": "ClassExpression",
            "start": 8,
            "end": 123,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 16,
              "end": 123,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 22,
                  "end": 35,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 29,
                    "end": 30,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": true,
                  "value": {
                    "type": "Literal",
                    "start": 33,
                    "end": 34,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "start": 40,
                  "end": 48,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 47,
                    "end": 48,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": true,
                  "value": null
                },
                {
                  "type": "PropertyDefinition",
                  "start": 53,
                  "end": 87,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 61,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": true,
                  "value": {
                    "type": "ObjectExpression",
                    "start": 64,
                    "end": 87,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 74,
                        "end": 81,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 74,
                          "end": 75,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 77,
                          "end": 81,
                          "raw": "\"hi\"",
                          "value": "hi"
                        }
                      }
                    ]
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "start": 92,
                  "end": 120,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 99,
                    "end": 100,
                    "decorators": [],
                    "name": "d",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": true,
                  "value": {
                    "type": "BinaryExpression",
                    "start": 103,
                    "end": 119,
                    "operator": "+",
                    "left": {
                      "type": "MemberExpression",
                      "start": 103,
                      "end": 108,
                      "computed": false,
                      "object": {
                        "type": "MemberExpression",
                        "start": 103,
                        "end": 106,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 103,
                          "end": 104,
                          "decorators": [],
                          "name": "C",
                          "optional": false
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 105,
                          "end": 106,
                          "decorators": [],
                          "name": "c",
                          "optional": false
                        }
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 107,
                        "end": 108,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    },
                    "right": {
                      "type": "Literal",
                      "start": 111,
                      "end": 119,
                      "raw": "\" world\"",
                      "value": " world"
                    }
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "implements": [],
            "superClass": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
