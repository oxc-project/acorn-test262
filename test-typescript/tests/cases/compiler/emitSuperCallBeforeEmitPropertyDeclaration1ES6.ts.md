__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 17,
  "end": 160,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 17,
      "end": 42,
      "id": {
        "type": "Identifier",
        "start": 23,
        "end": 24,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 25,
        "end": 42,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 31,
            "end": 40,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 31,
              "end": 35,
              "name": "blub",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 38,
              "end": 39,
              "value": 6,
              "raw": "6"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 45,
      "end": 160,
      "id": {
        "type": "Identifier",
        "start": 51,
        "end": 52,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 61,
        "end": 62,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 63,
        "end": 160,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 70,
            "end": 80,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 70,
              "end": 74,
              "name": "blub",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 77,
              "end": 79,
              "value": 12,
              "raw": "12"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 86,
            "end": 158,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 86,
              "end": 97,
              "name": "constructor",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "constructor",
            "value": {
              "type": "FunctionExpression",
              "start": 97,
              "end": 158,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 100,
                "end": 158,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 110,
                    "end": 136,
                    "expression": {
                      "type": "Literal",
                      "start": 110,
                      "end": 135,
                      "value": "someStringForEgngInject",
                      "raw": "'someStringForEgngInject'"
                    },
                    "directive": "someStringForEgngInject"
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 145,
                    "end": 152,
                    "expression": {
                      "type": "CallExpression",
                      "start": 145,
                      "end": 152,
                      "callee": {
                        "type": "Super",
                        "start": 145,
                        "end": 150
                      },
                      "arguments": [],
                      "optional": false,
                      "typeArguments": null
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
