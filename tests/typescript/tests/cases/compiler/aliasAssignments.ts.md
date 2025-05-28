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
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 13,
          "end": 22,
          "decorators": [],
          "name": "someClass",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 23,
          "end": 55,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 29,
              "end": 53,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 36,
                "end": 44,
                "decorators": [],
                "name": "someData",
                "optional": false,
                "typeAnnotation": null
              },
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
              "value": null,
              "computed": false,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": "public"
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
  "end": 141,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 55,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 14,
        "decorators": [],
        "name": "moduleA",
        "optional": false,
        "typeAnnotation": null
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 71,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 61,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 64,
            "end": 71,
            "decorators": [],
            "name": "moduleA",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 103,
          "end": 108,
          "id": {
            "type": "Identifier",
            "start": 103,
            "end": 104,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
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
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 114,
          "end": 121,
          "decorators": [],
          "name": "moduleA",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
