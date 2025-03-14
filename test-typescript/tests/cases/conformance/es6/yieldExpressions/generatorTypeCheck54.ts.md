__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 109,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 23,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 23,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 12,
            "end": 21,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 13,
              "end": 21,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 15,
                "end": 21
              }
            },
            "value": null
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
    },
    {
      "type": "ClassDeclaration",
      "start": 24,
      "end": 47,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 34,
        "end": 47,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 36,
            "end": 45,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 45,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 39,
                "end": 45
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 30,
        "end": 33,
        "decorators": [],
        "name": "Baz",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 48,
      "end": 109,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 62,
        "end": 109,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 68,
            "end": 85,
            "expression": {
              "type": "YieldExpression",
              "start": 68,
              "end": 84,
              "argument": {
                "type": "ArrayExpression",
                "start": 75,
                "end": 84,
                "elements": [
                  {
                    "type": "NewExpression",
                    "start": 76,
                    "end": 83,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 80,
                      "end": 83,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  }
                ]
              },
              "delegate": true
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 90,
            "end": 107,
            "expression": {
              "type": "YieldExpression",
              "start": 90,
              "end": 106,
              "argument": {
                "type": "ArrayExpression",
                "start": 97,
                "end": 106,
                "elements": [
                  {
                    "type": "NewExpression",
                    "start": 98,
                    "end": 105,
                    "arguments": [],
                    "callee": {
                      "type": "Identifier",
                      "start": 102,
                      "end": 105,
                      "decorators": [],
                      "name": "Baz",
                      "optional": false
                    }
                  }
                ]
              },
              "delegate": true
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": true,
      "id": {
        "type": "Identifier",
        "start": 58,
        "end": 59,
        "decorators": [],
        "name": "g",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
