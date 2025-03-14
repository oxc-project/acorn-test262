__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 182,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 47,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 47,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 27,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
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
              "start": 25,
              "end": 26,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 32,
            "end": 45,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 40,
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
              "start": 43,
              "end": 44,
              "raw": "2",
              "value": 2
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
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 49,
      "end": 181,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 67,
        "end": 181,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 73,
            "end": 86,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
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
              "start": 84,
              "end": 85,
              "raw": "3",
              "value": 3
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 91,
            "end": 109,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 98,
              "end": 99,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "MemberExpression",
              "start": 102,
              "end": 109,
              "computed": false,
              "object": {
                "type": "Super",
                "start": 102,
                "end": 107
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 108,
                "end": 109,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          },
          {
            "type": "StaticBlock",
            "start": 115,
            "end": 179,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 132,
                "end": 139,
                "expression": {
                  "type": "MemberExpression",
                  "start": 132,
                  "end": 138,
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "start": 132,
                    "end": 136
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 137,
                    "end": 138,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 148,
                "end": 156,
                "expression": {
                  "type": "MemberExpression",
                  "start": 148,
                  "end": 155,
                  "computed": false,
                  "object": {
                    "type": "Super",
                    "start": 148,
                    "end": 153
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 154,
                    "end": 155,
                    "decorators": [],
                    "name": "b",
                    "optional": false
                  }
                }
              },
              {
                "type": "ExpressionStatement",
                "start": 165,
                "end": 173,
                "expression": {
                  "type": "MemberExpression",
                  "start": 165,
                  "end": 172,
                  "computed": false,
                  "object": {
                    "type": "Super",
                    "start": 165,
                    "end": 170
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 171,
                    "end": 172,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  }
                }
              }
            ]
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 55,
        "end": 56,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 65,
        "end": 66,
        "decorators": [],
        "name": "B",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
