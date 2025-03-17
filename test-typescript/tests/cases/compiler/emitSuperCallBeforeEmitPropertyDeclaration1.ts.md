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
            "accessibility": null,
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
      "start": 29,
      "end": 166,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 47,
        "end": 166,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 54,
            "end": 64,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 54,
              "end": 58,
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
              "start": 61,
              "end": 63,
              "raw": "12",
              "value": 12
            }
          },
          {
            "type": "MethodDefinition",
            "start": 70,
            "end": 164,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 81,
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
              "start": 81,
              "end": 164,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 84,
                "end": 164,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 94,
                    "end": 107,
                    "directive": "use strict",
                    "expression": {
                      "type": "Literal",
                      "start": 94,
                      "end": 106,
                      "raw": "\"use strict\"",
                      "value": "use strict"
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 116,
                    "end": 142,
                    "directive": "someStringForEgngInject",
                    "expression": {
                      "type": "Literal",
                      "start": 116,
                      "end": 141,
                      "raw": "'someStringForEgngInject'",
                      "value": "someStringForEgngInject"
                    }
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 151,
                    "end": 158,
                    "directive": null,
                    "expression": {
                      "type": "CallExpression",
                      "start": 151,
                      "end": 158,
                      "arguments": [],
                      "callee": {
                        "type": "Super",
                        "start": 151,
                        "end": 156
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
        "start": 35,
        "end": 36,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 45,
        "end": 46,
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
