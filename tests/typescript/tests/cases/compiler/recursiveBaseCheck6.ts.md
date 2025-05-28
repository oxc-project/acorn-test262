__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 58,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 40,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "S18",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 9,
        "end": 12,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 10,
            "end": 11,
            "name": {
              "type": "Identifier",
              "start": 10,
              "end": 11,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": {
        "type": "Identifier",
        "start": 21,
        "end": 24,
        "decorators": [],
        "name": "S18",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 24,
        "end": 37,
        "params": [
          {
            "type": "TSTypeLiteral",
            "start": 25,
            "end": 36,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 27,
                "end": 34,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 27,
                  "end": 30,
                  "decorators": [],
                  "name": "S19",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 30,
                  "end": 33,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 32,
                    "end": 33,
                    "typeName": {
                      "type": "Identifier",
                      "start": 32,
                      "end": 33,
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 37,
        "end": 40,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 41,
      "end": 58,
      "expression": {
        "type": "MemberExpression",
        "start": 41,
        "end": 57,
        "object": {
          "type": "NewExpression",
          "start": 42,
          "end": 51,
          "callee": {
            "type": "Identifier",
            "start": 46,
            "end": 49,
            "decorators": [],
            "name": "S18",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": []
        },
        "property": {
          "type": "Identifier",
          "start": 53,
          "end": 57,
          "decorators": [],
          "name": "blah",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
