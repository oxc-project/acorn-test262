__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 178,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 25,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 25,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 23,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 18,
              "decorators": [],
              "name": "blub",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 21,
              "end": 22,
              "raw": "6",
              "value": 6,
              "regex": null,
              "bigint": null
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
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 28,
      "end": 178,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 46,
        "end": 178,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 52,
            "end": 61,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 56,
              "decorators": [],
              "name": "blah",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 59,
              "end": 60,
              "raw": "2",
              "value": 2,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 66,
            "end": 176,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 66,
              "end": 77,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 77,
              "end": 176,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 96,
                "end": 176,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 106,
                    "end": 119,
                    "directive": "use strict",
                    "expression": {
                      "type": "Literal",
                      "start": 106,
                      "end": 118,
                      "raw": "\"use strict\"",
                      "value": "use strict",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 128,
                    "end": 154,
                    "directive": "someStringForEgngInject",
                    "expression": {
                      "type": "Literal",
                      "start": 128,
                      "end": 153,
                      "raw": "'someStringForEgngInject'",
                      "value": "someStringForEgngInject",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 163,
                    "end": 170,
                    "directive": null,
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
                      "optional": false,
                      "typeArguments": null
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
                  "start": 78,
                  "end": 94,
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "start": 85,
                    "end": 94,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 86,
                      "end": 94,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 88,
                        "end": 94
                      }
                    }
                  },
                  "readonly": false,
                  "static": false
                }
              ],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 34,
        "end": 35,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 44,
        "end": 45,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
