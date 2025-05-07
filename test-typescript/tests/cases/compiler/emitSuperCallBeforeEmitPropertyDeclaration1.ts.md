__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 165,
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
      "end": 165,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 46,
        "end": 165,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 53,
            "end": 63,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 53,
              "end": 57,
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
              "start": 60,
              "end": 62,
              "raw": "12",
              "value": 12,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "MethodDefinition",
            "start": 69,
            "end": 163,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 80,
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
              "start": 80,
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
                      "value": "use strict",
                      "regex": null,
                      "bigint": null
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
                      "value": "someStringForEgngInject",
                      "regex": null,
                      "bigint": null
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 150,
                    "end": 157,
                    "directive": null,
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
              "params": [],
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
