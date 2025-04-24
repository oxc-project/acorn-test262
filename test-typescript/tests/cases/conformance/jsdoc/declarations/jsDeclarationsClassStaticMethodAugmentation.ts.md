__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 70,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 46,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 46,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 19,
          "end": 46,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 25,
              "end": 44,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 32,
                "end": 38,
                "decorators": [],
                "name": "method",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": true,
              "value": {
                "type": "FunctionExpression",
                "start": 38,
                "end": 44,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 41,
                  "end": 44,
                  "body": []
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
          "start": 13,
          "end": 18,
          "decorators": [],
          "name": "Clazz",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 48,
      "end": 70,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 48,
        "end": 69,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 48,
          "end": 65,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 48,
            "end": 60,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 48,
              "end": 53,
              "decorators": [],
              "name": "Clazz",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 54,
              "end": 60,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 61,
            "end": 65,
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "right": {
          "type": "Literal",
          "start": 68,
          "end": 69,
          "raw": "5",
          "value": 5
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
