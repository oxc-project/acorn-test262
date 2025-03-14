__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 100,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 10,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 10,
        "body": []
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
      "start": 11,
      "end": 99,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 29,
        "end": 99,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 35,
            "end": 38,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "PrivateIdentifier",
              "start": 35,
              "end": 37,
              "name": "x"
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 43,
            "end": 97,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 43,
              "end": 54,
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
              "start": 54,
              "end": 97,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 57,
                "end": 97,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 67,
                    "end": 74,
                    "expression": {
                      "type": "UnaryExpression",
                      "start": 67,
                      "end": 73,
                      "argument": {
                        "type": "Literal",
                        "start": 72,
                        "end": 73,
                        "raw": "0",
                        "value": 0
                      },
                      "operator": "void",
                      "prefix": true
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 83,
                    "end": 91,
                    "expression": {
                      "type": "CallExpression",
                      "start": 83,
                      "end": 90,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 83,
                        "end": 88
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
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 27,
        "end": 28,
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
