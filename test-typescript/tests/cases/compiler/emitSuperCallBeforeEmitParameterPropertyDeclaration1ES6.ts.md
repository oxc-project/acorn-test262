__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 182,
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
      "end": 181,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 63,
        "end": 181,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 69,
            "end": 179,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 80,
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
              "start": 80,
              "end": 179,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 99,
                "end": 179,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 109,
                    "end": 122,
                    "directive": "use strict",
                    "expression": {
                      "type": "Literal",
                      "start": 109,
                      "end": 121,
                      "raw": "\"use strict\"",
                      "value": "use strict"
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 131,
                    "end": 157,
                    "directive": "someStringForEgngInject",
                    "expression": {
                      "type": "Literal",
                      "start": 131,
                      "end": 156,
                      "raw": "'someStringForEgngInject'",
                      "value": "someStringForEgngInject"
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 166,
                    "end": 173,
                    "expression": {
                      "type": "CallExpression",
                      "start": 166,
                      "end": 173,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 166,
                        "end": 171
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
                  "start": 81,
                  "end": 97,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 88,
                    "end": 97,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 89,
                      "end": 97,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 91,
                        "end": 97
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
