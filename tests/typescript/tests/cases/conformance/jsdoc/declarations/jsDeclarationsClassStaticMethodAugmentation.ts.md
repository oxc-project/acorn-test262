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
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 46,
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
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 19,
          "end": 46,
          "body": [
            {
              "type": "MethodDefinition",
              "start": 25,
              "end": 44,
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
              "value": {
                "type": "FunctionExpression",
                "start": 38,
                "end": 44,
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 41,
                  "end": 44,
                  "body": []
                },
                "expression": false
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExpressionStatement",
      "start": 48,
      "end": 70,
      "expression": {
        "type": "AssignmentExpression",
        "start": 48,
        "end": 69,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 48,
          "end": 65,
          "object": {
            "type": "MemberExpression",
            "start": 48,
            "end": 60,
            "object": {
              "type": "Identifier",
              "start": 48,
              "end": 53,
              "decorators": [],
              "name": "Clazz",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 54,
              "end": 60,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "property": {
            "type": "Identifier",
            "start": 61,
            "end": 65,
            "decorators": [],
            "name": "prop",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Literal",
          "start": 68,
          "end": 69,
          "value": 5,
          "raw": "5"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
