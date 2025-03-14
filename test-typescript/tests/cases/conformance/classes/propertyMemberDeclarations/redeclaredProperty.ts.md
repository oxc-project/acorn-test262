__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 127,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 23,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 23,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 15,
            "end": 21,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 19,
              "end": 20,
              "raw": "1",
              "value": 1
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 10,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 25,
      "end": 126,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 52,
        "end": 126,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 56,
            "end": 58,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 61,
            "end": 72,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 61,
              "end": 62,
              "decorators": [],
              "name": "d",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "start": 65,
              "end": 71,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 65,
                "end": 69
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 70,
                "end": 71,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          },
          {
            "type": "MethodDefinition",
            "start": 76,
            "end": 124,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 76,
              "end": 87,
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
              "start": 87,
              "end": 124,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 90,
                "end": 124,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 96,
                    "end": 104,
                    "expression": {
                      "type": "CallExpression",
                      "start": 96,
                      "end": 103,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 96,
                        "end": 101
                      },
                      "optional": false
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 109,
                    "end": 120,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 109,
                      "end": 119,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 109,
                        "end": 115,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 109,
                          "end": 113
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 114,
                          "end": 115,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 118,
                        "end": 119,
                        "raw": "2",
                        "value": 2
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
        "start": 31,
        "end": 38,
        "decorators": [],
        "name": "Derived",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 47,
        "end": 51,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
