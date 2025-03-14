__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1,
  "end": 179,
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
      "end": 179,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 47,
        "end": 179,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 53,
            "end": 62,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 53,
              "end": 57,
              "decorators": [],
              "name": "blah",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 60,
              "end": 61,
              "raw": "2",
              "value": 2
            }
          },
          {
            "type": "MethodDefinition",
            "start": 67,
            "end": 177,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 67,
              "end": 78,
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
              "start": 78,
              "end": 177,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 97,
                "end": 177,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 107,
                    "end": 120,
                    "directive": "use strict",
                    "expression": {
                      "type": "Literal",
                      "start": 107,
                      "end": 119,
                      "raw": "\"use strict\"",
                      "value": "use strict"
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 129,
                    "end": 155,
                    "directive": "someStringForEgngInject",
                    "expression": {
                      "type": "Literal",
                      "start": 129,
                      "end": 154,
                      "raw": "'someStringForEgngInject'",
                      "value": "someStringForEgngInject"
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 164,
                    "end": 171,
                    "expression": {
                      "type": "CallExpression",
                      "start": 164,
                      "end": 171,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 164,
                        "end": 169
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
                  "start": 79,
                  "end": 95,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 86,
                    "end": 95,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 87,
                      "end": 95,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 89,
                        "end": 95
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
