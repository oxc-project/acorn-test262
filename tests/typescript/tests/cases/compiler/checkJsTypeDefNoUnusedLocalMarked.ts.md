__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 133,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 28,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 9,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 10,
        "end": 28,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 16,
            "end": 26,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 25,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 19,
                "end": 25
              }
            },
            "value": null,
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
      "type": "TSModuleDeclaration",
      "start": 30,
      "end": 118,
      "id": {
        "type": "Identifier",
        "start": 38,
        "end": 44,
        "decorators": [],
        "name": "global",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 45,
        "end": 118,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 51,
            "end": 67,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 55,
                "end": 66,
                "id": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 66,
                  "decorators": [],
                  "name": "module",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 61,
                    "end": 66,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 63,
                      "end": 66
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "kind": "global",
      "declare": true,
      "global": true
    },
    {
      "type": "TSExportAssignment",
      "start": 120,
      "end": 133,
      "expression": {
        "type": "Identifier",
        "start": 129,
        "end": 132,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 94,
  "end": 141,
  "body": [
    {
      "type": "ExpressionStatement",
      "start": 94,
      "end": 141,
      "expression": {
        "type": "AssignmentExpression",
        "start": 94,
        "end": 140,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 94,
          "end": 108,
          "object": {
            "type": "Identifier",
            "start": 94,
            "end": 100,
            "decorators": [],
            "name": "module",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 101,
            "end": 108,
            "decorators": [],
            "name": "exports",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "UnaryExpression",
          "start": 133,
          "end": 139,
          "operator": "void",
          "argument": {
            "type": "Literal",
            "start": 138,
            "end": 139,
            "value": 0,
            "raw": "0"
          },
          "prefix": true
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
