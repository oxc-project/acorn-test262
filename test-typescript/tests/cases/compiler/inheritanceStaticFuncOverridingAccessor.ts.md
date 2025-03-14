__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 168,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 101,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 101,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 14,
            "end": 57,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 26,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "get",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 26,
              "end": 57,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 29,
                "end": 57,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 39,
                    "end": 51,
                    "argument": {
                      "type": "Literal",
                      "start": 46,
                      "end": 50,
                      "raw": "\"20\"",
                      "value": "20"
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
            "start": 62,
            "end": 99,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 73,
              "end": 74,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "set",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 74,
              "end": 99,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 91,
                "end": 99,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 75,
                  "end": 89,
                  "decorators": [],
                  "name": "aValue",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 81,
                    "end": 89,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 83,
                      "end": 89
                    }
                  }
                }
              ]
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
        "name": "a",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 103,
      "end": 168,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 121,
        "end": 168,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 127,
            "end": 166,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 134,
              "end": 135,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 135,
              "end": 166,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 138,
                "end": 166,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 148,
                    "end": 160,
                    "argument": {
                      "type": "Literal",
                      "start": 155,
                      "end": 159,
                      "raw": "\"20\"",
                      "value": "20"
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
        "start": 109,
        "end": 110,
        "decorators": [],
        "name": "b",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 119,
        "end": 120,
        "decorators": [],
        "name": "a",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
