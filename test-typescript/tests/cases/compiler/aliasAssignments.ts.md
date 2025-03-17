__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 56,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 55,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 7,
        "end": 55,
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 22,
          "name": "someClass",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 23,
          "end": 55,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 29,
              "end": 53,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 36,
                "end": 44,
                "name": "someData",
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
                "start": 44,
                "end": 52,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 46,
                  "end": 52
                }
              },
              "accessibility": "public"
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
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
  "start": 0,
  "end": 142,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 55,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 14,
        "name": "moduleA",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 17,
        "end": 54,
        "expression": {
          "type": "Literal",
          "start": 25,
          "end": 53,
          "value": "./aliasAssignments_moduleA",
          "raw": "\"./aliasAssignments_moduleA\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 72,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 71,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 61,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 64,
            "end": 71,
            "name": "moduleA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 73,
      "end": 79,
      "expression": {
        "type": "AssignmentExpression",
        "start": 73,
        "end": 78,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 73,
          "end": 74,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 77,
          "end": 78,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 99,
      "end": 109,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 103,
          "end": 108,
          "id": {
            "type": "Identifier",
            "start": 103,
            "end": 104,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 107,
            "end": 108,
            "value": 1,
            "raw": "1"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 110,
      "end": 122,
      "expression": {
        "type": "AssignmentExpression",
        "start": 110,
        "end": 121,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 110,
          "end": 111,
          "name": "y",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 114,
          "end": 121,
          "name": "moduleA",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
