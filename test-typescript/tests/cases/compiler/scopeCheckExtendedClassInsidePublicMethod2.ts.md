scopeCheckExtendedClassInsidePublicMethod2.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 129,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 42,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 42,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 10,
            "end": 20,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 19,
              "decorators": [],
              "name": "v",
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
            "start": 21,
            "end": 30,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "decorators": [],
              "name": "p",
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
            "start": 31,
            "end": 40,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "decorators": [],
              "name": "s",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": null
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
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 43,
      "end": 129,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 61,
        "end": 129,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 66,
            "end": 127,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 74,
              "end": 127,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 77,
                "end": 127,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 85,
                    "end": 91,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 85,
                      "end": 90,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 85,
                        "end": 86,
                        "decorators": [],
                        "name": "v",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 89,
                        "end": 90,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 98,
                    "end": 109,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 98,
                      "end": 108,
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "start": 98,
                        "end": 104,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 98,
                          "end": 102
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 103,
                          "end": 104,
                          "decorators": [],
                          "name": "p",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Literal",
                        "start": 107,
                        "end": 108,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 116,
                    "end": 122,
                    "expression": {
                      "type": "AssignmentExpression",
                      "start": 116,
                      "end": 121,
                      "operator": "=",
                      "left": {
                        "type": "Identifier",
                        "start": 116,
                        "end": 117,
                        "decorators": [],
                        "name": "s",
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 120,
                        "end": 121,
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
        "start": 49,
        "end": 50,
        "decorators": [],
        "name": "D",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 59,
        "end": 60,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
