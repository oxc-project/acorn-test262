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
        "name": "S18",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 9
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 10,
              "end": 11
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 10,
            "end": 11
          }
        ],
        "start": 9,
        "end": 12
      },
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "S18",
        "optional": false,
        "typeAnnotation": null,
        "start": 21,
        "end": 24
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "params": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "S19",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 27,
                  "end": 30
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "A",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 32,
                      "end": 33
                    },
                    "typeArguments": null,
                    "start": 32,
                    "end": 33
                  },
                  "start": 30,
                  "end": 33
                },
                "accessibility": null,
                "static": false,
                "start": 27,
                "end": 34
              }
            ],
            "start": 25,
            "end": 36
          }
        ],
        "start": 24,
        "end": 37
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 37,
        "end": 40
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 40
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "MemberExpression",
        "object": {
          "type": "NewExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "S18",
            "optional": false,
            "typeAnnotation": null,
            "start": 46,
            "end": 49
          },
          "typeArguments": null,
          "arguments": [],
          "start": 42,
          "end": 51
        },
        "property": {
          "type": "Identifier",
          "decorators": [],
          "name": "blah",
          "optional": false,
          "typeAnnotation": null,
          "start": 53,
          "end": 57
        },
        "optional": false,
        "computed": false,
        "start": 41,
        "end": 57
      },
      "directive": null,
      "start": 41,
      "end": 58
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 58
}
```
