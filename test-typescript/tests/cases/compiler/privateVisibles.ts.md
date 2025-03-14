privateVisibles.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 115,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 114,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 114,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 13,
            "end": 30,
            "accessibility": "private",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 25,
              "decorators": [],
              "name": "pvar",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 28,
              "end": 29,
              "raw": "0",
              "value": 0
            }
          },
          {
            "type": "MethodDefinition",
            "start": 32,
            "end": 74,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 43,
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
              "start": 43,
              "end": 74,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 46,
                "end": 74,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 53,
                    "end": 71,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 57,
                        "end": 70,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 57,
                          "end": 58,
                          "decorators": [],
                          "name": "n",
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 61,
                          "end": 70,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 61,
                            "end": 65
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 66,
                            "end": 70,
                            "decorators": [],
                            "name": "pvar",
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
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          },
          {
            "type": "MethodDefinition",
            "start": 77,
            "end": 112,
            "accessibility": "public",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 84,
              "end": 88,
              "decorators": [],
              "name": "meth",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 88,
              "end": 112,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 91,
                "end": 112,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 93,
                    "end": 111,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 97,
                        "end": 110,
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 97,
                          "end": 98,
                          "decorators": [],
                          "name": "q",
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 101,
                          "end": 110,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 101,
                            "end": 105
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 106,
                            "end": 110,
                            "decorators": [],
                            "name": "pvar",
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
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script"
}
```
