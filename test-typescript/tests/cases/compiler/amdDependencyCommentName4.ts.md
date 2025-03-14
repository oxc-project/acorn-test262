amdDependencyCommentName4.ts
```json
{
  "type": "Program",
  "start": 197,
  "end": 422,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 197,
      "end": 223,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 204,
        "end": 222,
        "raw": "\"unaliasedModule1\"",
        "value": "unaliasedModule1"
      },
      "specifiers": []
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 225,
      "end": 263,
      "id": {
        "type": "Identifier",
        "start": 232,
        "end": 234,
        "decorators": [],
        "name": "r1",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 237,
        "end": 262,
        "expression": {
          "type": "Literal",
          "start": 245,
          "end": 261,
          "raw": "\"aliasedModule1\"",
          "value": "aliasedModule1"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 264,
      "end": 267,
      "expression": {
        "type": "Identifier",
        "start": 264,
        "end": 266,
        "decorators": [],
        "name": "r1",
        "optional": false
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 269,
      "end": 311,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 294,
        "end": 310,
        "raw": "\"aliasedModule2\"",
        "value": "aliasedModule2"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 277,
          "end": 279,
          "imported": {
            "type": "Identifier",
            "start": 277,
            "end": 279,
            "decorators": [],
            "name": "p1",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 277,
            "end": 279,
            "decorators": [],
            "name": "p1",
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 281,
          "end": 283,
          "imported": {
            "type": "Identifier",
            "start": 281,
            "end": 283,
            "decorators": [],
            "name": "p2",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 281,
            "end": 283,
            "decorators": [],
            "name": "p2",
            "optional": false
          }
        },
        {
          "type": "ImportSpecifier",
          "start": 285,
          "end": 287,
          "imported": {
            "type": "Identifier",
            "start": 285,
            "end": 287,
            "decorators": [],
            "name": "p3",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 285,
            "end": 287,
            "decorators": [],
            "name": "p3",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 312,
      "end": 315,
      "expression": {
        "type": "Identifier",
        "start": 312,
        "end": 314,
        "decorators": [],
        "name": "p1",
        "optional": false
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 317,
      "end": 348,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 331,
        "end": 347,
        "raw": "\"aliasedModule3\"",
        "value": "aliasedModule3"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 324,
          "end": 325,
          "local": {
            "type": "Identifier",
            "start": 324,
            "end": 325,
            "decorators": [],
            "name": "d",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 349,
      "end": 351,
      "expression": {
        "type": "Identifier",
        "start": 349,
        "end": 350,
        "decorators": [],
        "name": "d",
        "optional": false
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 353,
      "end": 390,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 373,
        "end": 389,
        "raw": "\"aliasedModule4\"",
        "value": "aliasedModule4"
      },
      "specifiers": [
        {
          "type": "ImportNamespaceSpecifier",
          "start": 360,
          "end": 367,
          "local": {
            "type": "Identifier",
            "start": 365,
            "end": 367,
            "decorators": [],
            "name": "ns",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 391,
      "end": 394,
      "expression": {
        "type": "Identifier",
        "start": 391,
        "end": 393,
        "decorators": [],
        "name": "ns",
        "optional": false
      }
    },
    {
      "type": "ImportDeclaration",
      "start": 396,
      "end": 422,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 403,
        "end": 421,
        "raw": "\"unaliasedModule2\"",
        "value": "unaliasedModule2"
      },
      "specifiers": []
    }
  ],
  "sourceType": "script"
}
```
