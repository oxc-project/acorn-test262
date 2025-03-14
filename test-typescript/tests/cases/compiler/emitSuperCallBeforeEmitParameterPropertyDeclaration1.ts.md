__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 166,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 1,
      "end": 26,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 9,
        "end": 26,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 15,
            "end": 24,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 15,
              "end": 19,
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
              "start": 22,
              "end": 23,
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
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 29,
      "end": 165,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 47,
        "end": 165,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 53,
            "end": 163,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 53,
              "end": 64,
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
              "start": 64,
              "end": 163,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 83,
                "end": 163,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 93,
                    "end": 106,
                    "directive": "use strict",
                    "expression": {
                      "type": "Literal",
                      "start": 93,
                      "end": 105,
                      "raw": "\"use strict\"",
                      "value": "use strict"
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 115,
                    "end": 141,
                    "directive": "someStringForEgngInject",
                    "expression": {
                      "type": "Literal",
                      "start": 115,
                      "end": 140,
                      "raw": "'someStringForEgngInject'",
                      "value": "someStringForEgngInject"
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 150,
                    "end": 157,
                    "expression": {
                      "type": "CallExpression",
                      "start": 150,
                      "end": 157,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 150,
                        "end": 155
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
              "params": [
                {
                  "type": "TSParameterProperty",
                  "start": 65,
                  "end": 81,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 72,
                    "end": 81,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 73,
                      "end": 81,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 75,
                        "end": 81
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
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
        "start": 35,
        "end": 36,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 45,
        "end": 46,
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
