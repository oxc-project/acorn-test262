derivedClassOverridesPrivateFunction1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 227,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 95,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 16,
        "end": 95,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 22,
            "end": 65,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 33,
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
              "start": 33,
              "end": 65,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 36,
                "end": 65,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 46,
                    "end": 59,
                    "expression": {
                      "type": "CallExpression",
                      "start": 46,
                      "end": 58,
                      "arguments": [],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 46,
                        "end": 56,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 46,
                          "end": 50
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 51,
                          "end": 56,
                          "decorators": [],
                          "name": "_init",
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
          },
          {
            "type": "MethodDefinition",
            "start": 70,
            "end": 93,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 83,
              "decorators": [],
              "name": "_init",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 83,
              "end": 93,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 86,
                "end": 93,
                "body": []
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
        "end": 15,
        "decorators": [],
        "name": "BaseClass",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 96,
      "end": 207,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 133,
        "end": 207,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 139,
            "end": 177,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 139,
              "end": 150,
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
              "start": 150,
              "end": 177,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 153,
                "end": 177,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 163,
                    "end": 171,
                    "expression": {
                      "type": "CallExpression",
                      "start": 163,
                      "end": 170,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 163,
                        "end": 168
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
          },
          {
            "type": "MethodDefinition",
            "start": 182,
            "end": 205,
            "accessibility": "private",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 190,
              "end": 195,
              "decorators": [],
              "name": "_init",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 195,
              "end": 205,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 198,
                "end": 205,
                "body": []
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
        "start": 102,
        "end": 114,
        "decorators": [],
        "name": "DerivedClass",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 123,
        "end": 132,
        "decorators": [],
        "name": "BaseClass",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 208,
      "end": 227,
      "expression": {
        "type": "NewExpression",
        "start": 208,
        "end": 226,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 212,
          "end": 224,
          "decorators": [],
          "name": "DerivedClass",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
