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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 25,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 23,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 18,
              "decorators": [],
              "name": "blub",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 21,
              "end": 22,
              "value": 6,
              "raw": "6"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 28,
      "end": 165,
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
      "typeParameters": null,
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
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 46,
        "end": 165,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 53,
            "end": 63,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 53,
              "end": 57,
              "decorators": [],
              "name": "blub",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 60,
              "end": 62,
              "value": 12,
              "raw": "12"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 69,
            "end": 163,
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
            "value": {
              "type": "FunctionExpression",
              "start": 80,
              "end": 163,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 83,
                "end": 163,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 93,
                    "end": 106,
                    "expression": {
                      "type": "Literal",
                      "start": 93,
                      "end": 105,
                      "value": "use strict",
                      "raw": "\"use strict\""
                    },
                    "directive": "use strict"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 115,
                    "end": 141,
                    "expression": {
                      "type": "Literal",
                      "start": 115,
                      "end": 140,
                      "value": "someStringForEgngInject",
                      "raw": "'someStringForEgngInject'"
                    },
                    "directive": "someStringForEgngInject"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 150,
                    "end": 157,
                    "expression": {
                      "type": "CallExpression",
                      "start": 150,
                      "end": 157,
                      "callee": {
                        "type": "Super",
                        "start": 150,
                        "end": 155
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
