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
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1042,
        "end": 1045,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1049,
          "end": 1057,
          "decorators": [],
          "name": "arr",
          "optional": false,
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
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        }
      ],
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
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1045,
        "end": 1048,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1046,
            "end": 1047,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1046,
              "end": 1047,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
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
        "computed": false,
        "object": {
          "type": "CallExpression",
          "start": 1063,
          "end": 1070,
          "arguments": [
            {
              "type": "ArrayExpression",
              "start": 1067,
              "end": 1069,
              "elements": []
            }
          ],
          "callee": {
            "type": "Identifier",
            "start": 1063,
            "end": 1066,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "optional": false
        },
        "optional": false,
        "property": {
          "type": "Identifier",
          "start": 1071,
          "end": 1074,
          "decorators": [],
          "name": "bar",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
