__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 180,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 46,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 11,
        "end": 46,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 17,
            "end": 44,
            "accessibility": "protected",
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 27,
              "end": 38,
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
              "start": 38,
              "end": 44,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 41,
                "end": 44,
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
      "start": 47,
      "end": 116,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 74,
        "end": 116,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 80,
            "end": 108,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 87,
              "end": 91,
              "decorators": [],
              "name": "make",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 91,
              "end": 108,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 94,
                "end": 108,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 96,
                    "end": 106,
                    "expression": {
                      "type": "NewExpression",
                      "start": 96,
                      "end": 106,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 100,
                        "end": 104,
                        "decorators": [],
                        "name": "Base",
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
        "start": 53,
        "end": 60,
        "decorators": [],
        "name": "Derived",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 69,
        "end": 73,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 118,
      "end": 179,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 134,
        "end": 179,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 140,
            "end": 168,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 147,
              "end": 151,
              "decorators": [],
              "name": "fake",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 151,
              "end": 168,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 154,
                "end": 168,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 156,
                    "end": 166,
                    "expression": {
                      "type": "NewExpression",
                      "start": 156,
                      "end": 166,
                      "arguments": [],
                      "callee": {
                        "type": "Identifier",
                        "start": 160,
                        "end": 164,
                        "decorators": [],
                        "name": "Base",
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
        "start": 124,
        "end": 133,
        "decorators": [],
        "name": "Unrelated",
        "optional": false
      },
      "implements": [],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
