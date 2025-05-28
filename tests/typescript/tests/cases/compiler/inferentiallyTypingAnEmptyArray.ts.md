__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1024,
  "end": 1074,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 1024,
      "end": 1061,
      "id": {
        "type": "Identifier",
        "start": 1041,
        "end": 1044,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1044,
        "end": 1047,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1045,
            "end": 1046,
            "name": {
              "type": "Identifier",
              "start": 1045,
              "end": 1046,
              "decorators": [],
              "name": "T",
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
      "params": [
        {
          "type": "Identifier",
          "start": 1048,
          "end": 1056,
          "decorators": [],
          "name": "arr",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1051,
            "end": 1056,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 1053,
              "end": 1056,
              "elementType": {
                "type": "TSTypeReference",
                "start": 1053,
                "end": 1054,
                "typeName": {
                  "type": "Identifier",
                  "start": 1053,
                  "end": 1054,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1057,
        "end": 1060,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1059,
          "end": 1060,
          "typeName": {
            "type": "Identifier",
            "start": 1059,
            "end": 1060,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1062,
      "end": 1074,
      "expression": {
        "type": "MemberExpression",
        "start": 1062,
        "end": 1073,
        "object": {
          "type": "CallExpression",
          "start": 1062,
          "end": 1069,
          "callee": {
            "type": "Identifier",
            "start": 1062,
            "end": 1065,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "ArrayExpression",
              "start": 1066,
              "end": 1068,
              "elements": []
            }
          ],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 1070,
          "end": 1073,
          "decorators": [],
          "name": "bar",
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
