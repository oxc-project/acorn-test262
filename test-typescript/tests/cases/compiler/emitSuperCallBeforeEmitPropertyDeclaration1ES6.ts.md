__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 160,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 17,
      "end": 42,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 25,
        "end": 42,
        "body": [
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
              "start": 31,
              "end": 35,
              "decorators": [],
              "name": "blub",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 38,
              "end": 39,
              "raw": "6",
              "value": 6
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 23,
        "end": 24,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 45,
      "end": 160,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 63,
        "end": 160,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 70,
            "end": 80,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 74,
              "decorators": [],
              "name": "blub",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 77,
              "end": 79,
              "raw": "12",
              "value": 12
            }
          },
          {
            "type": "MethodDefinition",
            "start": 86,
            "end": 158,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 86,
              "end": 97,
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
              "start": 97,
              "end": 158,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 100,
                "end": 158,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 110,
                    "end": 136,
                    "directive": "someStringForEgngInject",
                    "expression": {
                      "type": "Literal",
                      "start": 110,
                      "end": 135,
                      "raw": "'someStringForEgngInject'",
                      "value": "someStringForEgngInject"
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 145,
                    "end": 152,
                    "expression": {
                      "type": "CallExpression",
                      "start": 145,
                      "end": 152,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 145,
                        "end": 150
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
        "start": 51,
        "end": 52,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 61,
        "end": 62,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
