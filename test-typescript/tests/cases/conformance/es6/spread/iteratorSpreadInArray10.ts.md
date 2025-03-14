__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 115,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 77,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 21,
        "end": 77,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 27,
            "end": 75,
            "computed": true,
            "decorators": [],
            "key": {
              "type": "MemberExpression",
              "start": 28,
              "end": 43,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 28,
                "end": 34,
                "decorators": [],
                "name": "Symbol",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 35,
                "end": 43,
                "decorators": [],
                "name": "iterator",
                "optional": false
              }
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 44,
              "end": 75,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 47,
                "end": 75,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 57,
                    "end": 69,
                    "argument": {
                      "type": "ThisExpression",
                      "start": 64,
                      "end": 68
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
        "start": 6,
        "end": 20,
        "decorators": [],
        "name": "SymbolIterator",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 79,
      "end": 115,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 83,
          "end": 114,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 83,
            "end": 88,
            "decorators": [],
            "name": "array",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 91,
            "end": 114,
            "elements": [
              {
                "type": "SpreadElement",
                "start": 92,
                "end": 113,
                "argument": {
                  "type": "NewExpression",
                  "start": 95,
                  "end": 113,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 99,
                    "end": 113,
                    "decorators": [],
                    "name": "SymbolIterator",
                    "optional": false
                  }
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
