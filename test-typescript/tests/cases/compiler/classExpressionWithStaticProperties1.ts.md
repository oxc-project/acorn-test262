classExpressionWithStaticProperties1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 82,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 82,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 81,
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
            "end": 81,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 16,
              "end": 81,
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
                  "end": 53,
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
                  "value": {
                    "type": "Literal",
                    "start": 51,
                    "end": 52,
                    "raw": "2",
                    "value": 2
                  }
                },
                {
                  "type": "PropertyDefinition",
                  "start": 58,
                  "end": 79,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 66,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": true,
                  "value": {
                    "type": "BinaryExpression",
                    "start": 69,
                    "end": 78,
                    "operator": "+",
                    "left": {
                      "type": "MemberExpression",
                      "start": 69,
                      "end": 72,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 69,
                        "end": 70,
                        "decorators": [],
                        "name": "C",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 71,
                        "end": 72,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    },
                    "right": {
                      "type": "MemberExpression",
                      "start": 75,
                      "end": 78,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 75,
                        "end": 76,
                        "decorators": [],
                        "name": "C",
                        "optional": false
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 77,
                        "end": 78,
                        "decorators": [],
                        "name": "b",
                        "optional": false
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
