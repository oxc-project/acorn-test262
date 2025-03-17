__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 172,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 67,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 12,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 16,
          "end": 37,
          "left": {
            "type": "Identifier",
            "start": 16,
            "end": 17,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "ClassExpression",
            "start": 20,
            "end": 37,
            "id": null,
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 26,
              "end": 37,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 28,
                  "end": 35,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 28,
                    "end": 32,
                    "name": "prop",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": null,
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 32,
                    "end": 35,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 34,
                      "end": 35,
                      "typeName": {
                        "type": "Identifier",
                        "start": 34,
                        "end": 35,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
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
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 42,
        "end": 67,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 48,
            "end": 65,
            "argument": {
              "type": "Identifier",
              "start": 55,
              "end": 64,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 38,
        "end": 41,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 40,
          "end": 41,
          "typeName": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 128,
      "end": 172,
      "expression": {
        "type": "MemberExpression",
        "start": 128,
        "end": 171,
        "object": {
          "type": "CallExpression",
          "start": 128,
          "end": 164,
          "callee": {
            "type": "Identifier",
            "start": 128,
            "end": 131,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "ClassExpression",
              "start": 132,
              "end": 163,
              "id": null,
              "superClass": null,
              "body": {
                "type": "ClassBody",
                "start": 138,
                "end": 163,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 140,
                    "end": 161,
                    "static": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 147,
                      "end": 151,
                      "name": "prop",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 154,
                      "end": 161,
                      "value": "hello",
                      "raw": "\"hello\""
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
            }
          ],
          "optional": false,
          "typeArguments": null
        },
        "property": {
          "type": "Identifier",
          "start": 165,
          "end": 171,
          "name": "length",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
