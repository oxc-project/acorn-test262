__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 1025,
  "end": 1075,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 1025,
      "end": 1062,
      "id": {
        "type": "Identifier",
        "start": 1042,
        "end": 1045,
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
          "type": "Identifier",
          "start": 1049,
          "end": 1057,
          "name": "arr",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1052,
            "end": 1057,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 1054,
              "end": 1057,
              "elementType": {
                "type": "TSTypeReference",
                "start": 1054,
                "end": 1055,
                "typeName": {
                  "type": "Identifier",
                  "start": 1054,
                  "end": 1055,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1045,
        "end": 1048,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1046,
            "end": 1047,
            "name": {
              "type": "Identifier",
              "start": 1046,
              "end": 1047,
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
        "start": 1058,
        "end": 1061,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1060,
          "end": 1061,
          "typeName": {
            "type": "Identifier",
            "start": 1060,
            "end": 1061,
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
      "start": 1063,
      "end": 1075,
      "expression": {
        "type": "MemberExpression",
        "start": 1063,
        "end": 1074,
        "object": {
          "type": "CallExpression",
          "start": 1063,
          "end": 1070,
          "callee": {
            "type": "Identifier",
            "start": 1063,
            "end": 1066,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "ArrayExpression",
              "start": 1067,
              "end": 1069,
              "elements": []
            }
          ],
          "optional": false,
          "typeArguments": null
        },
        "property": {
          "type": "Identifier",
          "start": 1071,
          "end": 1074,
          "name": "bar",
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
