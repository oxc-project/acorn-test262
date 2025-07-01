__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "blub",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 18
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 6,
              "raw": "6",
              "start": 21,
              "end": 22
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 23
          }
        ],
        "start": 8,
        "end": 25
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 25
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 34,
        "end": 35
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 45
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "blah",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 56
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 59,
              "end": 60
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 52,
            "end": 61
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 77
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "TSParameterProperty",
                  "accessibility": "public",
                  "decorators": [],
                  "override": false,
                  "parameter": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 88,
                        "end": 94
                      },
                      "start": 86,
                      "end": 94
                    },
                    "start": 85,
                    "end": 94
                  },
                  "readonly": false,
                  "static": false,
                  "start": 78,
                  "end": 94
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Literal",
                      "value": "use strict",
                      "raw": "\"use strict\"",
                      "start": 106,
                      "end": 118
                    },
                    "directive": "use strict",
                    "start": 106,
                    "end": 119
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Literal",
                      "value": "someStringForEgngInject",
                      "raw": "'someStringForEgngInject'",
                      "start": 128,
                      "end": 153
                    },
                    "directive": "someStringForEgngInject",
                    "start": 128,
                    "end": 154
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Super",
                        "start": 163,
                        "end": 168
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 163,
                      "end": 170
                    },
                    "directive": null,
                    "start": 163,
                    "end": 170
                  }
                ],
                "start": 96,
                "end": 176
              },
              "expression": false,
              "start": 77,
              "end": 176
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 66,
            "end": 176
          }
        ],
        "start": 46,
        "end": 178
      },
      "abstract": false,
      "declare": false,
      "start": 28,
      "end": 178
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 178
}
```
